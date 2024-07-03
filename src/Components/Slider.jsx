import React, { useContext } from 'react'
import SliderImage from './SliderImage'
import NewsContext from '../Providers/News/NewsContext'

const Slider = () => {


  const {allNews} = useContext(NewsContext)
  return (

    <>
    <div id="carouselExampleControlsNoTouching" className="carousel slide pt-1" data-bs-touch="false">
  <div className="carousel-inner">

    {
      allNews.map((news,index) => <SliderImage key={index} news={news} value={index}/>)
    }
    




  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div></>

  )
}

export default Slider