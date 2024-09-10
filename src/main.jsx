import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RouteData from './DataRoute.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className="flex justify-center items-center">
   <div className="container bg-glass-background backdrop-blur-19 backdrop-saturate-180 h-[100vh]">
    <RouteData />
    </div>
    </div>
  </StrictMode>,
)
