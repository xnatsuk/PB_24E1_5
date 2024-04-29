import Layout from '../layouts/default';
import Home from './Home';
import Topic from './Topic';

export const pages = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'topic/:id',
        element: <Topic />,
      },
    ],
  },
]