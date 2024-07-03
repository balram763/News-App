import { createContext, useReducer } from 'react'
import NewsReducer from './NewsReducer';

const NewsContext = createContext();

export const NewsProvider = ({children}) => {

    const initialState = {
        allNews : [{"source":{"id":null,"name":"Business Standard"},
            "author":"Capital Market",
            "title":"ABB India's IEC low voltage (LV) motors contribute to substantial energy savings",
            "description":"Achieves energy savings of over 500 gigawatt hours (GWh) for Indian industries",
            "url":"https://www.business-standard.com/markets/capital-market-news/abb-india-s-iec-low-voltage-lv-motors-contribute-to-substantial-energy-savings-124061800311_1.html",
            "urlToImage":"https://www.business-standard.com/assets/web-assets/images/Business_Standard_685x385.jpg",
            "publishedAt":"2024-06-18T06:19:00Z",
            "content":"Achieves energy savings of over 500 gigawatt hours (GWh) for Indian industries\r\nABB India's IEC low voltage (LV) motors business has achieved a significant milestone in energy conservation. Its insta… [+1866 chars]"},
            {"source":{"id":"the-times-of-india","name":"The Times of India"},
            "author":"Sobia Khan","title":"Infrastructure, digitisation and spiritual tourism to drive realty in smaller towns: Colliers report",
            "description":"The real estate sector in India is experiencing a transformation, with smaller towns becoming vital to the economy due to enhanced infrastructure, affordable property, skilled labor, and government support. Forecasts suggest the sector could reach $1 trillion…",
            "url":"https://economictimes.indiatimes.com/industry/services/property-/-cstruction/infrastructure-digitisation-and-spiritual-tourism-to-drive-realty-in-smaller-towns/articleshow/111076589.cms",
            "urlToImage":"https://img.etimg.com/thumb/msid-111076681,width-1200,height-630,imgsize-452654,overlay-economictimes/photo.jpg",
            "publishedAt":"2024-06-18T06:15:16Z",
            "content":"BENGALURU: The real estate sector in India is undergoing a significant transformation, with smaller towns emerging as key contributors to the country's economy. Improved infrastructure, affordable re… [+5157 chars]"}
        ]

        
    }


    const [state,dispatch] = useReducer(NewsReducer,initialState)



    return(
        <NewsContext.Provider value={{...state, dispatch}}>{children}</NewsContext.Provider>
    )
}

export default NewsContext