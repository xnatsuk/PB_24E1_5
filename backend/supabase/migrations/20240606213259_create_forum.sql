create extension if not exists "moddatetime" with schema "extensions";

create type "public"."reputation" as enum ('Legendary', 'Veteran', 'Villager', 'Sprout');

-- create sequence "public"."id_sequence";

-- TABLES

create table if not exists "public"."users" (
    "user_id" uuid references auth.users(id) not null primary key,
    "username" text unique not null,
    "avatar_url" text,
    "reputation" reputation default 'Sprout'::reputation not null ,
    "score" bigint not null default '0'::bigint
);

alter table "public"."users" owner to "postgres";
alter table "public".users enable row level security;


create table if not exists "public"."posts" (
    "id" bigint generated by default as identity primary key ,
    "created_at" timestamp with time zone default "now"() not null,
    "updated_at" timestamp with time zone default "now"() not null,
    "title" character varying not null,
    "description" text,
    "likes" bigint not null default '0'::bigint,
    "author" uuid references public.users(user_id) not null,
    "content" text not null
);

alter table "public"."posts" owner to "postgres";
alter table "public"."posts" enable row level security;


create table if not exists "public"."messages" (
    "id" bigint generated by default as identity primary key ,
    "user_id" uuid references public.users(user_id) not null,
    "post_id" bigint references public.posts(id) not null,
    "content" text not null,
    "created_at" timestamp with time zone default "now"() not null
);

alter table "public"."messages" owner to "postgres";
alter table "public"."messages" enable row level security;


begin;
  drop publication if exists supabase_realtime;
  create publication supabase_realtime;
commit;
alter publication supabase_realtime add table posts;
alter publication supabase_realtime add table messages;
alter publication supabase_realtime add table users;


-- FUNCTIONS
set check_function_bodies = off;
-- This trigger automatically creates a user entry when a new user signs up via Supabase Auth.
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (user_id, username, avatar_url)
  values (new.id, new.raw_user_meta_data->>'username', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;


-- Set up Storage!
insert into storage.buckets (id, name)
  values ('avatars', 'avatars');


create or replace function public.increment_score()
 returns trigger
 language plpgsql
as $function$
begin
  if TG_OP = 'INSERT' then
    if TG_TABLE_NAME = 'posts' then
      update users
      set score = score + 1
      where user_id = new.author;
    elsif TG_TABLE_NAME = 'messages' then
      update users
      set score = score + 1
      where user_id = new.user_id;
    end if;
  elsif TG_OP = 'UPDATE' and new.likes > old.likes then
    if TG_TABLE_NAME = 'posts' then
      update users
      set score = score + 1
      -- so users can't like their own posts;
      where posts.author != new.user_id;
    end if;
  end if;
  return new;
end;
$function$
;


-- TRIGGERS

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

create or replace  trigger increment_score_trigger_create_message
    after insert on public.messages
    for each row execute procedure public.increment_score();

create or replace  trigger increment_score_trigger_create_post
    after insert on public.posts
    for each row execute procedure public.increment_score();

create or replace trigger increment_score_trigger_on_like
    after update on public.posts
    for each row execute procedure public.increment_score();

create or replace trigger handle_updated_at
    after update on public.posts
    for each row execute procedure moddatetime('updated_at');

create or replace trigger handle_updated_at
    after update on public.messages
    for each row execute procedure moddatetime('updated_at');


-- POLICIES
create policy "Enable insert for authenticated users only"
    on "public"."messages" for insert to authenticated
    with check ((select auth.uid()) = user_id);


create policy "Enable read access for all users"
    on "public"."messages" for select to anon
    using (true);


create policy "Users can delete their own messages."
    on "public"."messages" for delete to authenticated
    using ((select auth.uid()) = user_id);


create policy "Users can update their own messages."
    on "public"."messages" for update to authenticated
    using ((select auth.uid()) = user_id);


create policy "Authenticated users can insert posts"
    on "public"."posts" for insert to authenticated
    with check ((select auth.uid()) = author);


create policy "Authors can delete their own posts"
    on "public"."posts" for delete to authenticated
    using ((select auth.uid()) = author);


create policy "Authors can update their own posts"
    on "public"."posts" for update to authenticated
    using ((select auth.uid()) = author);


create policy "Everyone can read posts"
    on "public"."posts" for select to anon
    using (true);


create policy "Public users are viewable by everyone."
    on "public"."users" for select to anon
    using (true);


create policy "Users can insert their own profile."
    on "public"."users" for insert to authenticated
    with check ((select auth.uid()) = user_id);


create policy "Users can update own profile."
    on "public"."users" for update to authenticated
    using ((select auth.uid()) = user_id);


-- Set up access controls for storage.
create policy "Only Users can view their avatar on storage"
    on storage.objects for select to authenticated
    using ((select auth.uid()) = owner);


create policy "Users can upload an avatar."
    on storage.objects for insert to authenticated
    with check (bucket_id = 'avatars');


create policy "Users can update their own avatar."
    on storage.objects for update to authenticated
    using ((select auth.uid()) = owner);

