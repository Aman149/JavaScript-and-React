import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './login.jsx'
import './index.css'

const login = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {!login?'Please login' : <App />}
  </React.StrictMode>,
)
