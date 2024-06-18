import { Sparkles } from 'lucide-react'
import { BasePostCard } from '../base/BasePostCard'

export function BasePostsList(props) {
  const { children, mostPopular } = props
  return (
    <div className="flex flex-col gap-10 justify-between">
      <div className=" m-auto divide-x-4 divide-purple-500 space-y-5 my-10">
        <h2 className="flex items-center justify-around text-3xl font-semibold mb-16">
          <Sparkles size={30} color="#efa3c5" />
          Popular no Momento
        </h2>

        {mostPopular
          ? (
            <BasePostCard
              title={mostPopular.title}
              description={mostPopular?.description}
              likes={mostPopular?.likes}
              messages={mostPopular?.messages}
            />
          )
          : (
            <div className="container mx-auto px-4 py-5 mb-3 rounded-t bg-zinc-900 hover:bg-zinc-800 shadow-2xl divide-y divide-zinc-900 hover:divide-zinc-800">
              <p className="px-4 text-center text-lg">
                Nenhum post popular no momento
              </p>
            </div>
          )}
      </div>

      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-3xl text-center font-semibold">Todos os Posts</h2>
        <div className="space-y-5 m-8 w-[80%]">
          {children}
        </div>
      </div>
    </div>
  )
}
