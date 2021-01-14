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
        .then(getNews)  // <-- Get all journal entries
        .then(dispatchStateChangeEvent) } // <-- Broadcast the state change event
    





let news = []

export const useNews = () => {
    const sortedByDate = news.sort(
        (currentNews, nextNews) =>
            Date.parse(currentNews.date) - Date.parse(nextNews.date)
    )
    return sortedByDate
}