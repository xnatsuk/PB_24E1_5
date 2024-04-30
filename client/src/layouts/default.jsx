import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main className='bg-zinc-900 text-slate-300 tracking-wide text-lg' >
        <Outlet />
      </main>
    </>
  )
}