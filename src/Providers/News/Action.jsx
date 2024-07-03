export const fetchNews = async(topic) => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2024-06-02&sortBy=publishedAt&apiKey=1a9e51104a704237bbbaae42ee41528f`)
    const data = await response.json();
    console.log(data.articles)
    return data.articles;
}


