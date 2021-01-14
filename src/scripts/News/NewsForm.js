import { useNews } from "./NewsProvider.js"
import { saveNews } from "./NewsProvider.js"

const contentTarget = document.querySelector("#newsForm")
const eventHub = document.querySelector(".container")

// create a function to find the matching username to userId
// const userId = getItem(user.id)


export const NewsForm = () => {
    
contentTarget.innerHTML = `

<div class="field is-2 ml-5 mt-6 mb-6">
<h2>News Entry</h2>
<div class="newsDate" id="newsDate">Date: ${Date.now()}</p>
<!-- username will go here --!>
<label class="label" id="userName">USER NAME</p>
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
    <input class="input" type="text" placeholder="enter a synopsis for the news article" id="newsSynopsis>
  </div>
</div>

<div class="control" id="saveNews">
  <button class="button is-primary mt-3">Save News Article</button>
</div>


</form>
</div>`;
};



eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNews"){
console.log("anything?")
        // let date = document.getElementById("newsDate")
        // let user = document.getElementById("userName")
        let url = document.getElementById("newsURL")
        let title = document.getElementById("newsTitle")
        let synopsis = document.getElementById("newsSynopsis")
        
//date.value && user.value && 

        if (url.value && title.value && synopsis.value !== "") {
            const newArticle = {
                date: Date.now(),
                user: storage.getItem(user.id),
                url: url.value,
                title: title.value,
                synopsis: synopsis.value
            }
            saveEntry(newArticle)
            date.value = ""
            user.value = ""
            url.value = ""
            title.value = ""
            synopsis.value = ""
        }
    }
})
