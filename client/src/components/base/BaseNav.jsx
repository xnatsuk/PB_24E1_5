import { Swords } from 'lucide-react'

export function BaseNavbar({ title, children }) {
  return (
    <nav className="py-4 w-full bg-orange-400">
      <ul className="flex flex-row justify-between items-center mx-10">
        <li className="flex gap-3 text-4xl text-zinc-900 font-bold tracking-wide">
          <Swords size={40} />
          {title}
        </li>

        <li
          className="flex gap-5 text-zinc-900 font-semibold tracking-wide text-2xl"
        >
          {children}
        </li>

      </ul>
    </nav>
  )
}
