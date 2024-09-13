import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RouteData from './DataRoute.jsx'
import UserContextProvider from './Components/app context/Usercontext.jsx'
createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <RouteData />
  </UserContextProvider>,
)
