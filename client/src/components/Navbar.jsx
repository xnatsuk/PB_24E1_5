import { NavLink } from 'react-router-dom'
import { useAuthStore } from '../stores/auth.store'
import { supabase } from '../utils/supabase'
import { BaseNavbar } from './base/BaseNav'

export function Navbar() {
  const { session } = useAuthStore()
  const logout = async () => await supabase.auth.signOut()

  return (
    <BaseNavbar title="Gamefied">
      <NavLink className=" aria-[current=page]:text-white hover:text-white" to="/">Início</NavLink>
      {!session
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
