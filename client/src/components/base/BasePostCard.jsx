import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { formatter } from '../../utils/formatDate'
import { profileRequest } from '../../services/profiles'

export function BasePostCard(props) {
  const { author, updated_at, created_at, title, description, likes, messageCount, id } = props
  const [authorName, setAuthorName] = useState('')

  useEffect(() => {
    profileRequest.getById(author)
      .then(response => setAuthorName(response.username)
        .catch(console.error))
  }, [author])

  return (
    <section
      className="text-gray-400 bg-zinc-900 hover:bg-zinc-800 shadow-2xl divide-y divide-zinc-900 hover:divide-zinc-800 body-font overflow-hidden rounded-lg"
    >
      <div className="container px-5 py-24 mx-1 ">
        <div className="-my-24 divide-y-2 divide-orange-300">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex md:flex-col flex-row gap-3
            justify-around items-baseline w-full"
            >
              <span className="font-semibold title-font text-white">{authorName}</span>
              <span className="mt-1 text-gray-500 text-sm">
                Mensagens:
                {' '}
                {messageCount}
              </span>
              <span className="mt-1 text-gray-500 text-sm">
                Likes:
                {' '}
                {likes}
              </span>
              <span className="mt-1 text-gray-500 text-sm">
                Criado
                {' '}
                {formatter(created_at)}
              </span>
              <span className="mt-1 text-gray-500 text-sm">
                Editado
                {' '}
                {formatter(updated_at)}
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-white title-font mb-2">{title}</h2>
              <p className="leading-relaxed">{description}</p>
              <Link to={`post/${id}`} className="text-orange-300 inline-flex items-center mt-4">
                Ver post
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
