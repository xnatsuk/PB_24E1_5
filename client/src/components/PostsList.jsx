import { useEffect, useState } from 'react'
import { postRequest } from '../services/posts'

import { BasePostCard } from './base/BasePostCard'
import { BasePostsList } from './base/BasePostsList'

export function PostsList() {
  const [posts, setPosts] = useState([])
  const [mostPopular, setMostPopular] = useState(null)

  useEffect(() => {
    postRequest.getAll()
      .then((response) => {
        setPosts(response)
        if (response && response.length > 1) {
          const mostPopularPost = response.reduce((mostPop, currentPost) =>
            currentPost.likes > mostPop.likes ? currentPost : mostPop, response[0])
          setMostPopular(mostPopularPost)
        }
      })
      .catch(console.error)
  }, [])

  return (
    posts && posts.length > 0
      ? (
        <BasePostsList mostPopular={mostPopular}>
          {posts.map(post => (
            <BasePostCard
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              likes={post.likes}
              messages={post.messages}
              author={post.user_id}
              created_at={post.created_at}
              updated_at={post.updated_at}
            />
          ))}
        </BasePostsList>
      )
      : <h1>No posts found</h1>
  )
}
