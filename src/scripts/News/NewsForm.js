//This module creates the form that allows for a user to save a news article. 
//It also creates the event listener that allows for the saveNews function to be called
//and updates the DOM to show the new article
// - Ron

import { useNews } from "./NewsProvider.js"
import { saveNews } from "./NewsProvider.js"

const contentTarget = document.querySelector("#newsForm")
const eventHub = document.querySelector(".container")

// create a function to find the matching username to userId



export const NewsForm = () => {
    
contentTarget.innerHTML = `

<div class="field is-2 ml-6 mt-6 mb-6">
<label class="label">News Article Entry</label>
<!-- username will go here --!>
<label class="label" id="userName">username will go here</p>
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

<div class="control">
  <button class="button mt-3 is-primary" id="saveNews">Save News Article</button>
</div>


</form>
</div>`;
};



eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNews"){
      
        let user = parseInt(sessionStorage.getItem("activeUser"))
        let date = Date.now()
        let url = document.getElementById("newsURL").value
        let title = document.getElementById("newsTitle").value
        let synopsis = document.getElementById("newsSynopsis").value
        console.log(url)
        console.log(title)
        console.log(synopsis)
    
            const newArticle = {
                date:new Date(date).toLocaleDateString('en-US')  ,
                userId: user,
                url: url,
                title: title,
                synopsis: synopsis
            }
            saveNews(newArticle)
            
            url = ""
            title= ""
            synopsis= ""
        
    }
    })
        
      
      
      
      
