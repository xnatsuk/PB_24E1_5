import { NavLink } from 'react-router-dom'

export function BaseAuthCard({ children }) {
  return (
    <section className="flex flex-col items-center justify-center py-32 px-6 h-[70%]">
      <div className="flex text-center justify-evenly w-full mb-6">
        <NavLink
          tabIndex="0"
          to="auth/login"
          className="w-1/3 pb-4 font-medium text-xl border-b border-gray-400 text-gray-300
          aria-[current=page]:text-orange-300 aria-[current=page]:border-orange-300"
        >
          Login
        </NavLink>

        <NavLink
          className="w-1/3 pb-4 font-medium text-xl border-b border-gray-400 text-gray-300
           aria-[current=page]:text-orange-300 aria-[current=page]:border-orange-300"
          tabIndex="1"
          to="auth/register"
        >
          Registrar
        </NavLink>
      </div>

      {children}
    </section>
  )
}
