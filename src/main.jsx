import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import HomePage from '../public/component/HomePage.jsx'
import Footer from '../public/component/Footer.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from '../public/component/About.jsx'
import Authentication from '../public/component/Authentication.jsx'
import AppProvider from './AppProvider.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,     // Layout component
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "Footer",
        element: <Footer />,
      },
      {
        path: "About",
        element: <About />,
      },
       {
        path: "Login",
        element: <Authentication />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //  <RouterProvider router={router} />
  // </StrictMode>,

  <AppProvider>
      <App/>
  </AppProvider>
)
