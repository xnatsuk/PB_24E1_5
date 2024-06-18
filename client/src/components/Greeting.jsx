export function Greeting(props) {
  <div className="flex flex-col justify-stretch items-center py-12 mb-20">
    <h1 className="text-2xl font-bold">
      Bem vindo(a)
      {' '}
      {props.isLogged ? props.user.name : props.default}
    </h1>

    <p className="text-xl">
      {props.text}
    </p>
  </div>
}
