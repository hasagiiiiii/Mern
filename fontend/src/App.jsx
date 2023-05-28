import React, { Children } from 'react'
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Single from './pages/Single'
import Header from './component/Header'
import Footer from './component/Footer'
import Write from './pages/Write'
import './style.scss'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/Single',
        element: <Single />
      },
      {
        path: '/Write',
        element: <Write />
      }
    ]
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/Login',
    element: <Login />
  },
])

const App = () => {
  return (
    <div className='app'>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}




export default App
