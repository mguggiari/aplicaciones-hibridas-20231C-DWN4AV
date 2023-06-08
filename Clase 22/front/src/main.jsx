import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Error404Page from './pages/Error404Page'

import {createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ProductListPage from './pages/products/ProductsListPage'
import ProductDetailsPage from './pages/products/ProductDetailsPage'
import LoginPage from './pages/LoginPage'
import RoutePrivate from './components/RoutePrivate'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RoutePrivate><App /></RoutePrivate>,
    errorElement: <Error404Page />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'products',
        element: <ProductListPage />,
      },
      {
        path: 'products/:idProduct',
        element: <ProductDetailsPage />
      }

    ]
  },
  {
    path: '/login',
    element: <LoginPage />
  }
  
])


ReactDOM.createRoot(document.getElementById('root'))

.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
