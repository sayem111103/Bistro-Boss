import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Routes/Routes'
import { HelmetProvider } from 'react-helmet-async'
import Auth from './Auth/Auth'

function App() {

  return (
    <>
      <Auth><HelmetProvider><RouterProvider router={router} /></HelmetProvider></Auth>
    </>
  )
}

export default App
