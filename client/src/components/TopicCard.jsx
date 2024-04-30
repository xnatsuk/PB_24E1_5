import { Link } from "react-router-dom";
import { transformToUrl } from '../utils';

export const TopicCard = ({ title, description, likes, messages }) => (
  <div className="container mx-auto px-4 py-5 mb-3 rounded-t bg-zinc-900 hover:bg-zinc-800 shadow-2xl divide-y divide-zinc-900 hover:divide-zinc-800">
    <div className="flex items-center justify-between overflow-hidden px-5">
      <div>
        <Link
          className="block px-4 py-2 text-xl text-orange-400"
          to={`topic/${transformToUrl(title)}`}
        >
          {title}
        </Link>

        <div className=" flex-shrink-0">
          <p className="inline-flex px-2  leading-5 ml-2 self">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-2 flex justify-between flex-col">
        <p>
          Likes: {likes}
        </p>
        <p>
          Mensagens: {messages}
        </p>
      </div>
    </div>
  </div>
)
