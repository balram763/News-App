const dateString = new Date(Date.now()).toLocaleDateString("en-IN").split("/")
let year = dateString[2]
let month = dateString[1]
let day = dateString[0]-1

let todayDate = `0${year}-0${month}-0${day}`




export const fetchNews = async(topic) => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=${todayDate}&sortBy=publishedAt&apiKey=1a9e51104a704237bbbaae42ee41528f`)
    const data = await response.json();
    return data.articles;
}


