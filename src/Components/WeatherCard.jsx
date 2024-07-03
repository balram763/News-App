import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../Providers/Theme/ThemeContext'

const WeatherCard = () => {
  const {mode} = useContext(ThemeContext)

  const [weatherdata,setWeatherdata] = useState({
    location : {
      name : 'indore',
    },
    current : {
      temp_c : 20,
      condition : {
        text : 'hot',
        icon : '//cdn.weatherapi.com/weather/64x64/day/143.png'
      }
    }
  })
  const [findText,setFindText] = useState('indore')

  const findWeather = (e) =>{
    e.preventDefault()
    fetchWeather(findText)
    setFindText('')
  }

  useEffect(()=>{
    fetchWeather('indore')
  },[])

  const fetchWeather = async(location) => {
    const responce = await fetch(`http://api.weatherapi.com/v1/current.json?key=f2597082368e432bb9d54138240307&q=${location}&aqi=yes`)
    const data = await responce.json()
    setWeatherdata(data) 
    }

  return (

        <>
             
        <div id='weather' className={mode ? "card bg-dark text-light p-3 w-25 " : "card p-3 w-25 shadow"}style={{height:'50vh'}}>
        <h4 className="text-center my-2">Today's wether</h4>

        <form onSubmit={(e)=>findWeather(e)}>
          <input onChange={(e)=>setFindText(e.target.value)} value={findText} type="text" className="form-control p-2" placeholder='Enter Location'/>
          <button className="btn my-2 btn-sm btn-success">Find</button>
        </form>


        <div className='d-flex justify-content-center align-item-center text-center ' >
          <img src={weatherdata.current.condition.icon} alt="img" style={{height:'10vh', objectFit:'cover'}} />
          
        </div>
        <p className='p-1 text-center'>{weatherdata.current.condition.text}</p>
        
        <div className='d-flex justify-content-between px-3'>
        
        <h3>{weatherdata.current.temp_c} °C</h3>
        <h5 >{weatherdata.location.name}</h5>
      
        </div>

        <div className='d-flex justify-content-between px-3'>
        <p>humidity : {weatherdata.current.humidity}</p>
        <p>Wind : {weatherdata.current.wind_kph} kmh</p>
        </div>
        
      </div>
      </>
 
  )
}

export default WeatherCard