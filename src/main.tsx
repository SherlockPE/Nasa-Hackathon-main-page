import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div       className={`
        min-h-screen w-full 
        bg-repeat
        bg-cover bg-center  bg-bottom
        w-full h-screen
        bg-[linear-gradient(to_bottom,rgba(15,23,42,0.2),rgba(50,49,127,0.5)),url('../public/space-1.jpg')]
        text-white
        pt-16 
        relative
      `}>
    <App></App>
    </div>
  </StrictMode>,
)
