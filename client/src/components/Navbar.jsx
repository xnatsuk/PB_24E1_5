import { NavLink } from 'react-router-dom'
import { useAuthStore } from '../stores/auth.store'
import { BaseNavbar } from './base/BaseNav'

export function Navbar() {
  const { logout, user } = useAuthStore()

  return (
    <BaseNavbar title="Gamefied">
      <NavLink className=" aria-[current=page]:text-white hover:text-white" to="/">Início</NavLink>
      {!user
        ? (
          <NavLink
            className=" aria-[current=page]:text-white hover:text-white"
            to="/auth"
          >
            Entrar
          </NavLink>
        )
        : (
          <NavLink
            className=" aria-[current=page]:text-white hover:text-white"
            onClick={logout}
          >
            Sair
          </NavLink>
        )}

    </BaseNavbar>
  )
}
