import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AuthorCard } from '../components/AuthorCard'
import { PostDetail } from '../components/PostDetail'
import { postRequest } from '../services/posts'
import { profileRequest } from '../services/profiles'

export function Post() {
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
    <div className="flex flex-row gap-2 px-4 py-10 shadow-2xl rounded-lg">
      <AuthorCard user={user} />
      <PostDetail post={post} />
    </div>

  )
}
