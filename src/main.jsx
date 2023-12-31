import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import './style/App.css'

const domNode = document.querySelector('#root')
const root = createRoot(domNode)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
)