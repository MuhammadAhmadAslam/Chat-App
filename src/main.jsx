import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RouteData from './DataRoute.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className="flex justify-center items-center">
   <div className="w-full h-[100%] bg-white/10 rounded-xl shadow-md backdrop-blur-md border border-white/40">
    <RouteData />
    </div>
    </div>
  </StrictMode>,
)
