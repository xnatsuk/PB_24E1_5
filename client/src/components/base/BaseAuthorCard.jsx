export function BaseAuthorCard({ username, reputation, score, avatar_url }) {
  return (
    <div className="container h-full text-center max-w-full sm:max-w-60 rounded-lg">
      <div className="flex items-start justify-start sm:block">
        <img
          className=" w-36 h-36 mx-6 sm:mx-auto -mb-24 rounded-full"
          src={avatar_url ?? 'https://via.placeholder.com/150'}
          alt="user"
        />
        <div className=" flex flex-col justify-center items-baseline sm:block px-8 sm:pt-32 pb-12 rounded-lg">
          <h2 className="my-5 text-2xl text-orange-300">
            {username}
          </h2>

          <p className="mt-3">
            Reputação:
            {' '}
            <span className="text-purple-500">
              {reputation}
            </span>
          </p>

          <p>
            Pontuação:
            {' '}
            {score}
          </p>
        </div>
      </div>
    </div>
  )
}
