//This module creates the form that allows for a user to save a news article. 
//It also creates the event listener that allows for the saveNews function to be called
//and updates the DOM to show the new article
// - Ron

import { saveNews, deleteNews } from "./NewsProvider.js"
import { UseUsers } from "../user/UserDataProvider.js"

const contentTarget = document.querySelector("#newsForm")
const eventHub = document.querySelector(".container")

// create a function to find the matching username to userId
eventHub.addEventListener("click", (event) => {
  if (event.target.id === "openNewsForm") {
    document.getElementById("newsFormModal").classList.add("is-active");
  }
});

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "closeNewsForm") {
    document.getElementById("newsFormModal").classList.remove("is-active");
  }
});


export const NewsForm = () => {
  let users = UseUsers()
  const currentUser = parseInt(sessionStorage.getItem("activeUser"))
  const userName = users.find((person) => person.id === currentUser).username 


contentTarget.innerHTML = `

<div id="newsFormModal" class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">News Article Entry</p>
      <button id="closeNewsForm" class="delete" aria-label="close"></button>
    </header>

    <section class="modal-card-body">
    <div class="field">
      <label class="label">News Article Entry</label>
<!-- username will go here --!>
<label class="label" id="userName">${userName}</p>
<div class="field">
  <label class="label">Article URL</label>
  <div class="control">
    <input class="input" type="text" placeholder="enter a URL" id="newsURL">
  </div>
</div>
<div class="field">
  <label class="label">News Article Title</label>
  <div class="control">
    <input class="input" type="text" placeholder="enter the news article's title" id="newsTitle">
  </div>
</div>
<div class="field">
  <label class="label">News Article Synopsis</label>
  <div class="control">
    <textarea class="textarea" rows="4" placeholder="enter a synopsis for the news article" id="newsSynopsis"></textarea>
  </div>
</div>
</section>
<footer class="modal-card-foot">
  <button id="saveNews" class="button is-primary">Save News Article</button>
  <button id="closeNewsForm" class="button is-danger">Cancel</button>
</footer>
</div>





`;
};


eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNews"){
      
        let user = parseInt(sessionStorage.getItem("activeUser"))
        let date = Date.now()
        let url = document.getElementById("newsURL").value
        let title = document.getElementById("newsTitle").value
        let synopsis = document.getElementById("newsSynopsis").value
    
            const newArticle = {
                date:new Date(date).toLocaleDateString('en-US')  ,
                userId: user,
                url: url,
                title: title,
                synopsis: synopsis
            }
            saveNews(newArticle)
            
              document.getElementById("newsFormModal").classList.remove("is-active")
        
    }
    })
        
    eventHub.addEventListener("click", clickEvent => {
      if (clickEvent.target.id.startsWith("deleteNews--")) {
          const [prefix, newsId] = clickEvent.target.id.split("--")
          
         deleteNews(newsId)
      }
    })
      
      
      
