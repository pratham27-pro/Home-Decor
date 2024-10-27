"use client"
import { StrictMode, React } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'));

root.render(
<StrictMode>
    <App />
  </StrictMode>,
);