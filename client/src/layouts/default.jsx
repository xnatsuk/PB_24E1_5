import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { AuthProvider } from '../context/AuthProvider'

export function Layout() {
  return (
    <AuthProvider>
      <Navbar />
      <main className="bg-zinc-900 text-slate-300 min-h-screen px-3">
        <Outlet />
      </main>
    </AuthProvider>
  )
}
