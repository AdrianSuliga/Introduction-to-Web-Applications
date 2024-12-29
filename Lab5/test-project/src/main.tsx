import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Welcome } from './Welcome.tsx'
import { Goodbye } from './Goodbye.tsx'
import './main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Welcome name="Jagoda"/>
    <Goodbye name="Jagoda"/>
  </StrictMode>,
)
