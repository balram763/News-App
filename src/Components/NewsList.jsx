import React, { useContext } from 'react'
import ThemeContext from '../Providers/Theme/ThemeContext'

const NewsList = ({news}) => {
  const {mode} = useContext(ThemeContext)
  return (
    <>

    {/* <div className="row">
      <div className="col-lg-6 col-md-12 "> */}


      <div className={mode ? "card w-100 p-3 m-1 d-flex bg-dark text-light flex-row" : "card w-100 p-3 m-1 d-flex flex-row"}>
        <div className='bg-primary w-50 d-flex justify-content-center align-item-center'>
        <img src={news.urlToImage} alt="img" style={{height:'100%',width:'100%', objectFit:'cover'}} />
        </div>
        <div className='p-5'>
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            <p className="text-secondary mt-2">
              {new Date(news.publishedAt).toLocaleDateString("en-IN")}
            </p>

            <a target='_blank' href={news.url} className="btn btn-sm btn-primary float-end">Read more</a>
        </div>
        </div>
{/*         
      </div>
    </div> */}

    </>
  )
}

export default NewsList