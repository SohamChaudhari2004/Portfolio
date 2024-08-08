import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Particles from './components/magicui/particles.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
    
  </StrictMode>,
)
