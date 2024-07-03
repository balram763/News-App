import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { NewsProvider } from './Providers/News/NewsContext'


const App = () => {
  return (
    <NewsProvider>
    <Navbar/>
    <Home/>
    
    </NewsProvider>
  )
}

export default App
