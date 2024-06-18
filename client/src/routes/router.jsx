import { createBrowserRouter, redirect } from 'react-router-dom'
import { Layout } from '../layouts/default'
import { Home } from '../views/Home'
import { Post } from '../views/Post'
import { Login } from '../views/Login'
import { Register } from '../views/Register'
import { AuthCard } from '../components/AuthCard'
import { useAuthStore } from '../stores/auth.store'
import ErrorPage from './error-page'

function authLoader() {
  const token = useAuthStore.getState().session.access_token
  if (!token)
    return redirect('/auth/login')
}

export const routes = [
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        id: 'root',
        element: <Home />,
      },
      {
        path: 'post/:id',
        id: 'id',
        element: <Post />,
      },

      {
        path: '/auth',
        element: <AuthCard />,
        children: [
          {
            path: 'auth/login',
            element: <Login />,

          },
          {
            path: 'auth/register',
            element: <Register />,
          },
        ],
      },
    ],
  },

]

export const router = createBrowserRouter(routes)
