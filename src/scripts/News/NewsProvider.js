//This module handles fetch requests to get the news resource, save to it, and 
//will also delete
// -Ron

const eventHub = document.querySelector(".container")

export const getNews = () => {
    return fetch("http://localhost:8088/news")
        .then(response => response.json())
        .then(parsedNews => {
            news = parsedNews
        })
}

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("newsStateChanged"))
}

export const saveNews = (newArticle) => {
    fetch("http://localhost:8088/news", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newArticle)
    })
        .then(getNews)
        .then(dispatchStateChangeEvent) } 

export const deleteNews = newsId => {
    fetch(`http://localhost:8088/news/${newsId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(getNews)
    .then(dispatchStateChangeEvent)
}

    





let news = []

export const useNews = () => {
    const sortedByDate = news.sort(
        (currentNews, nextNews) =>
            Date.parse(currentNews.date) - Date.parse(nextNews.date)
    )
    return sortedByDate
}