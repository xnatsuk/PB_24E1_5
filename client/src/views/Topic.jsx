import { useState } from 'react';
import { UserCard } from '../components/UserCard';
import { TopicPost } from '../components/TopicPost';

export const Topic = () => {
  //exemplo para visualização
  const [user, setUser] = useState({ name: 'John Doe' })
  const [post, setPost] = useState({
    title: 'Título do Tópico',
    description: 'Breve descrição do tópico',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    likes: 100,
    messages: 20
  })

  return (
    <>
      <div className='flex flex-row gap-2 px-4 py-10 shadow-2xl rounded-lg'>
        <UserCard user={user} />
        <TopicPost post={post} />
      </div>
    </>
  )
}