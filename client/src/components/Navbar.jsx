import { Link } from 'react-router-dom'

export const Navbar = () => (
  <nav className=' px-4 py-4 w-full bg-zinc-800'>
    <ul className='container flex flex-row justify-between items-center mx-auto'>
      <li className='text-4xl text-orange-400 font-bold tracking-wide'>
        Gamefied
      </li>

      < li>
        <Link
          className='text-gray-300 hover:text-gray-100 cursor-pointer font-medium tracking-wide text-2xl'
          to="/"
        >
          Início
        </Link>
      </li >
    </ul >
  </nav >
)