import { useNews, getNews } from "./NewsProvider.js"
import { NewsHTMLconverter } from "./NewsHTMLconverter.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".dashboard")

eventHub.addEventListener("newsStateChanged", (customEvent) => {
    newsList()
})

let news = []

export const NewsList = () => {
    getNews()
    .then(() => {
        news = useNews()

        render(news)
    })
}

const render = (articles) => {
    if (articles.length > 0){
        contentTarget.innerHTML = articles
        .map((newArticle) => NewsList(newArticle))
        .join("")
    }
}
