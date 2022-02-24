import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './contents/App.jsx'
import Header from './components/header/Header.jsx'
import Profile from './contents/Profile.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App>
      <Profile />
    </App>
  </React.StrictMode>,
  document.getElementById('root')
)
