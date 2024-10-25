import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TotalProvider } from './components/usecontext/usecontext.jsx'

createRoot(document.getElementById('root')).render(
  <TotalProvider>  
    <App />
  </TotalProvider>,
)
