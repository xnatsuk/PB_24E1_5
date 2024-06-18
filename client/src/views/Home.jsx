import { PostsList } from '../components/PostsList'
import { Greeting } from '../components/Greeting'
import { useAuthStore } from '../stores/auth.store'

export function Home() {
  const { user } = useAuthStore()

  return (
    <>
      <Greeting user={user} />
      <PostsList />
    </>
  )
}
