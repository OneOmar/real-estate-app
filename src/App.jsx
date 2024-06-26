import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './routes/layout/Layout.jsx'
import { Homepage } from './routes/homepage/Homepage.jsx'
import { Listpage } from './routes/listpage/Listpage.jsx'
import { Singlepage } from './routes/singlepage/Singlepage.jsx'
import { Profilepage } from './routes/profilepage/Profilepage.jsx'
import { Login } from './routes/login/Login.jsx'
import { Register } from './routes/register/Register.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/list', element: <Listpage /> },
      { path: '/:id', element: <Singlepage /> },
      { path: '/profile', element: <Profilepage /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
