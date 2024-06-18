export function Greeting({ user }) {
  const defaultName = 'Visitante'

  return (
    <div className="flex flex-col justify-stretch items-center py-12 mb-20">
      <h1 className="text-2xl font-bold">
        Bem vindo(a)
        {' '}
        {user ? user.user_metadata.username : defaultName}
      </h1>
    </div>
  )
}
