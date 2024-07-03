import React, { useContext, useState } from 'react'
import ThemeContext from '../Providers/Theme/ThemeContext'
import { fetchNews } from '../Providers/News/Action'
import NewsContext from '../Providers/News/NewsContext'

const Navbar = () => {
  const {mode} = useContext(ThemeContext)
  const {dispatch} = useContext(NewsContext)

  const getNews = async(topic) => {
    const data = await fetchNews(topic)
    console.log(topic)

    dispatch({
      type : 'Get_News',
      payload : data
    })
  }



  const [text,setText] = useState('indore')
  const handleSubmit = (e) => {
    e.preventDefault()
   getNews(text)
  }
  return (
    <>
    
    <nav className={mode ? "navbar navbar-expand-lg bg-dark" : "navbar navbar-expand-lg bg-light"}>
    <div className="container-fluid">
      <a className={mode ? "navbar-brand text-light" : "navbar-brand"} href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className={mode ? "nav-link text-light" :"nav-link"} aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a onClick={()=>getNews("politics")} className={mode ? "nav-link text-light" :"nav-link"}  href="#">Politics</a>
          </li>
          <li className="nav-item">
            <a onClick={()=>getNews("indian sports")} className={mode ? "nav-link text-light" :"nav-link"}  href="#">Sports</a>
          </li>
          <li className="nav-item">
            <a onClick={()=>getNews("bollywood")} className={mode ? "nav-link text-light" :"nav-link"}  href="#">Bollywood</a>

          </li>

          {/* <li className="nav-item">
            <a className="nav-link" href="#">Nature</a>
          </li> */}
        </ul>
        <form onSubmit={(e)=>handleSubmit(e)} className="d-flex" role="search">
          <input onChange={(e)=>setText(e.target.value)} value={text} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>



    
    
    
    </>
  )
}

export default Navbar