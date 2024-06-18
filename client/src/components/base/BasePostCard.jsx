import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
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
      className="hover:border-b-purple-500  border-b shadow-2xl divide-y divide-zinc-900 hover:divide-zinc-800 body-font overflow-hidden rounded-lg"
    >
      <div className="container px-5 py-24 mx-1 ">
        <div className="-my-24 divide-y-2 divide-orange-300">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex md:flex-col flex-row gap-3
            justify-around items-baseline w-full"
            >
              <span className="font-semibold title-font text-purple-500">{authorName}</span>
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
              <h2 className="text-2xl font-medium text-orange-300 title-font mb-2">{title}</h2>
              <p className="leading-relaxed mb-10">{description}</p>
              <Link
                to={`post/${id}`}
                className="text-orange-300 hover:text-orange-200 inline-flex items-center"
              >
                Ver post
                <ChevronRight className="ml-2 mt-1" size="18" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
