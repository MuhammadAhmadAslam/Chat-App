import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RouteData from './DataRoute.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteData />
  </StrictMode>,
)
