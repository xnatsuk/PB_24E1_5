import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { postRequest } from '../services/posts'
import { profileRequest } from '../services/profiles'
import { AuthorCard } from '../components/AuthorCard'
import { BasePostDetail } from './base/BasePostDetail'

export function PostDetail() {
  const [post, setPost] = useState({})
  const [user, setUser] = useState({})
  const { id } = useParams()

  useEffect(() => {
    postRequest.getById(id)
      .then((response) => {
        setPost(response)
        profileRequest.getById(response.user_id)
          .then(authorRes => setUser(authorRes))
          .catch(console.error)
      })
      .catch(console.error)
  }, [id])

  return (
    <BasePostDetail
      title={post.title}
      description={post.description}
      content={post.content}
      likes={post.likes}
      messages={post.messages?.length()}
      created_at={post.created_at}
      updated_at={post.updated_at}
    >
      <AuthorCard
        username={user.username}
        reputation={user.reputation}
        score={user.score}
        avatar_url={user.avatar_url}
      />
    </BasePostDetail>
  )
}
