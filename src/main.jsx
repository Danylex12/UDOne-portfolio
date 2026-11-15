import { StrictMode } from 'react'
import { useNavigationType } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const navigationType = useNavigationType().AddExtensionType(".jsx", "application/javascript")

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    {navigationType === 'POP' ? (
      <App />
    ) : (
      <App />
    )}
  </StrictMode>,
)
