import React, { useContext } from 'react'
import ThemeContext from '../Providers/Theme/ThemeContext'

const WeatherCard = () => {
  const {mode} = useContext(ThemeContext)
  return (
      
        <div id='weather' className={mode ? "card bg-dark text-light p-3 w-25" : "card p-3 w-25"}style={{height:'40vh'}}>
        <h4 className="text-center my-2">Today's wether</h4>
        <div className='d-flex justify-content-center align-item-center text-center ' >
          <img src="https://imgs.search.brave.com/zV-nMvaKs2ntpBryXfhy7eoUMbIIYv6x8An4Fzg0Fuk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/My8zMS8xOC8xNC9p/Y29uLTEyOTQyMjRf/NjQwLnBuZw" alt="img" style={{height:'10vh', objectFit:'cover'}} />
          
        </div>
        <p className='p-4 text-center'>Sunny day</p>
        <div className='d-flex justify-content-between px-3'>
        <h3>5c</h3>
        <h5 >indore</h5>
        </div>
      </div>
  )
}

export default WeatherCard