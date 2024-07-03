import React, { useContext } from 'react'
import NewsList from './NewsList'
import NewsContext from '../Providers/News/NewsContext'

const NewsSection = () => {
  const {allNews} = useContext(NewsContext)
  return (
    <>

   
    <div className="d-flex flex-wrap flex-row">
      {
        allNews.map((news,index)=> <NewsList key={index} news={news}/>)
      }
    

    </div>
    </>
  )
}

export default NewsSection