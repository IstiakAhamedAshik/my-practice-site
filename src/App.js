import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Main from './components/Main'
import Home from './components/Home'
import AddUser from './components/AddUser'
import UpdateUser from './components/UpdateUser'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://z-my-practice-crud.vercel.app/product'),
      },
      { path: '/adduser', element: <AddUser></AddUser> },

      {
        path: '/update/:id',
        loader: ({ params }) => {
          return fetch(
            `https://z-my-practice-crud.vercel.app/product/${params.id}`
          )
        },
        element: <UpdateUser></UpdateUser>,
      },
    ],
  },
])
function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
