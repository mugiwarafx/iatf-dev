import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './routes/error'
import Root from './routes/base'
import { Testers, Request, Join } from './pages/_all'

import './scss/index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'find-a-tester',
        element: <Testers />,
      },
      {
        path: 'make-a-request',
        element: <Request />,
      },
      {
        path: 'join-us',
        element: <Join />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </React.StrictMode>
)
