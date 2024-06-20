import { FlatList, Heading, Spacer, Center, Flex, Text } from 'native-base';
import { useState, useEffect } from 'react';
import { PostCard } from '../components/PostCard';

import { useAuthStore } from '../stores/AuthStore';

export function PostListScreen() {
  const [posts, setPosts] = useState();
  const { session, logout } = useAuthStore();

  return (
    <Flex safeArea>
      <Center h={'full'} m="3">
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => {
            return <Spacer />;
          }}
          renderItem={(post) => {
            return (
              <PostCard
                post={post.item}
                toggleLikeHandler={toggleLikeHandler}
              />
            );
          }}
        />
        <PostCard />
      </Center>
    </Flex>
  );
}
