import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <HomePage/>
  }, {
    path: '/@:username/:slug',
    element: <ArticlePage/>
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App