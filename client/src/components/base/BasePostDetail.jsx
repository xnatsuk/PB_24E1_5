import { Heart, MessageSquareText } from 'lucide-react'
import { formatter } from '../../utils/formatDate'

export function BasePostDetail({
  title,
  description,
  content,
  likes,
  messages,
  created_at,
  updated_at,
  children,
}) {
  return (
    <div className="container sm:flex  pt-20 shadow-2xl">
      {children}

      <div className="flex flex-col justify-between overflow-hidden p-5 w-full ">
        <div className="flex justify-start items-baseline gap-16 px-4 text-zinc-500">
          <p>
            Criado
            {' '}
            <span>{formatter(created_at)}</span>
          </p>
          <p>
            Editado
            {' '}
            <span>{formatter(updated_at)}</span>
          </p>
        </div>

        <div>
          <h1 className="px-4 py-2 text-2xl text-orange-400">
            {title}
          </h1>

          <div className="inline-flex px-4">
            <p>
              {description}
            </p>
          </div>
        </div>

        <div className="mx-auto px-4 my-10">
          <p>
            {content}
          </p>
        </div>

        <div className="flex justify-between items-center mt-2 px-4 text-lg">
          <div className="mt-3 flex items-center gap-2">
            <button type="button">
              <MessageSquareText className="hover:text-green-300" size="24" />
            </button>
            <p>Mensagens:</p>
            <span className="text-purple-500">
              {messages ?? 0}
            </span>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <button type="button">
              <Heart className="hover:text-red-400" size="24" />
            </button>
            <p>Likes:</p>
            <span className="text-purple-500">
              {likes}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
