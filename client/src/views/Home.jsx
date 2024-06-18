import { useState } from 'react'
import { PostsList } from '../components/PostsList'
import { Greeting } from '../components/Greeting'

export function Home() {
  const [user] = useState({ name: 'Usuário' })
  const [isLogged] = useState(false)

  const text = 'à página inicial do fórum. Abaixo temos os tópicos: (em construção)'

  return (
    <>
      <Greeting
        isLogged={isLogged}
        user={user}
        default="Visitante"
        text={text}
      />

      <PostsList />
    </>
  )
}
