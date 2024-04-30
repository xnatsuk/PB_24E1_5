import { useState } from "react";
import { Topics } from "../components/Topics";

export const Home = () => {
  //TODO: criar componente de boas vindas
  const [user, setUser] = useState({ name: 'Usuário' })
  const [isLogged, setIsLogged] = useState(false)

  return (
    <>
      <div className="flex flex-col justify-stretch items-center py-12 mb-20">
        <h1 className="text-2xl font-bold">
          Bem vindo(a) {isLogged ? user.name : 'visitante'}
        </h1>

        <p className="text-xl">
          à página inicial do fórum.
          Abaixo temos os tópicos: (em construção)
        </p>
      </div>

      <Topics />
    </>
  )
}