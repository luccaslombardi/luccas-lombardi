import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './pages/App.jsx'
import Header from './components/header/Header.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
