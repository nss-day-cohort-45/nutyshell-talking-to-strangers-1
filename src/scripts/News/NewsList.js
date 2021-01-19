//This module renders the list of news objects in the database and uses the newsHTMLconverter 
//to put them on the DOM
// -Ron

import { useNews, getNews } from "./NewsProvider.js"
import { NewsHTMLconverter } from "./NewsHTMLconverter.js"
import { NewsForm } from "./NewsForm.js"
import { newsModalButton } from "./NewsModalButton.js"
import { GetUsers, UseUsers } from "../user/UserDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector("#theNews")

eventHub.addEventListener("newsStateChanged", (customEvent) => {
    NewsList()
})

eventHub.addEventListener("click", (event) => {
    if (event.target.id === "openNewsForm") {
      document.getElementById("newsFormModal").classList.add("is-active");
    }
  });

let news = []

export const NewsList = () => {
    getNews()
    // .then(GetUsers)
    .then(() => {
        news = useNews()
        // user = UseUsers()
        render(news)
        newsModalButton()
    })
}

const render = (articles) => {

     contentTarget.innerHTML = `
    <div class="tile is-ancestor is-6">
    <div class="tile">
      <div class="tile is-parent is-vertical is-flex">
        <p class="title is-justify-content-center">News Articles</p>
        ${articles
                .map((newArticle) => NewsHTMLconverter(newArticle))
                .join("")
            }
        
          <a id="openNewsForm" class="button is-primary mt-3 ml-6">Add a news article</a>
      </div>
    </div>
  `;

}
