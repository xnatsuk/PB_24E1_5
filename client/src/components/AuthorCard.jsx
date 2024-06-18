export function AuthorCard({ user }) {
  return (
    <div className="container h-full text-center max-w-60 shadow-2xl rounded-lg">
      <img
        className=" w-36 h-36 mx-auto -mb-24 rounded-full"
        src={user.avatar_url ?? 'https://via.placeholder.com/150'}
        alt="user"
      />
      <div className="px-8 pt-32 pb-8 text-gray-200 bg-zinc-900 rounded-lg">
        <h2 className="my-3 text-2xl text-gray-100">
          {user.username}
        </h2>
        <p className="my-5 text-orange-300">
          {user.reputation}
        </p>
        <p>
          Pontuação:
          {' '}
          {user.score}
        </p>
      </div>
    </div>
  )
}
