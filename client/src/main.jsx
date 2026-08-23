import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Fallback from './components/Fallback.jsx'

createRoot(document.getElementById('root')).render(
  // <Suspense fallback={<Fallback />}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </Suspense>
)
