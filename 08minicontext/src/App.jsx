import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {
  

  return (
    
    <UserContextProvider>
      <h1>Hello this is future SDE living in Newyork and travelling the whole world</h1>
      <Login />
      <Profile />
      </UserContextProvider>
    
  )
}

export default App
