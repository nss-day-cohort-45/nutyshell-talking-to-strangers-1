//This module renders the list of news objects in the database and uses the newsHTMLconverter 
//to put them on the DOM
// -Ron

import { useNews, getNews } from "./NewsProvider.js"
import { NewsHTMLconverter } from "./NewsHTMLconverter.js"
import { NewsForm } from "./NewsForm.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector("#theNews")

eventHub.addEventListener("newsStateChanged", (customEvent) => {
    NewsList()
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
        .map((newArticle) => NewsHTMLconverter(newArticle))
        .join("")
    }
}
