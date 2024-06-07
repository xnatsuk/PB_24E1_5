export function TopicPost({ post }) {
  return (
    <div className="flex flex-col justify-between overflow-hidden p-5 w-full border-t border-orange-300 shadow-2xl rounded-lg">
      <div>
        <h1 className="px-4 py-2 text-2xl text-orange-400">
          {post.title}
        </h1>

        <div className="inline-flex px-4">
          <p>
            {post.description}
          </p>
        </div>
      </div>

      <div className="mx-auto px-4 my-10">
        <p>
          {post.content}
        </p>
      </div>

      <div className="flex justify-between md:justify-around mt-2 ">
        <p>
          Likes:
          {' '}
          {post.likes}
        </p>
        <p>
          Mensagens:
          {' '}
          {post.messages}
        </p>
      </div>

    </div>
  )
}
