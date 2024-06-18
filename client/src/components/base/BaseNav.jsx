import { Swords } from 'lucide-react'

export function BaseNavbar({ title, children }) {
  return (
    <nav className="py-4 w-full bg-zinc-800">
      <ul className="flex flex-row justify-between items-center mx-10">
        <li className="flex gap-3 text-4xl text-orange-400 font-bold tracking-wide">
          <Swords size={40} />
          {title}
        </li>

        <li
          className="flex gap-5 text-gray-300 font-medium tracking-wide text-2xl"
        >
          {children}
        </li>

      </ul>
    </nav>
  )
}
