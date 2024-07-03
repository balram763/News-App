import React from 'react'

const SliderImage = ({news,value}) => {
  return (
    <>

    <div className={value === 0 ? "carousel-item active" : "carousel-item"} >
      <img src={news.urlToImage} className="d-block w-100 " alt="..." style={{height:'70vh', objectFit:'contain'}}/>
    </div>
    </>
  )
}

export default SliderImage