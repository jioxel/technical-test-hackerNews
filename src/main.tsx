import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
const ErrorPage = lazy(() => import('./pages/Error.tsx'))
const DetailsPage = lazy(() => import('./pages/Details.tsx'))
const TopStoriesPage = lazy(() => import('./pages/TopStories.tsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/topStories/',
        element: <TopStoriesPage />
      },
      {
        path: '/details/:id',
        element: <DetailsPage />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
