import { useNews } from "./NewsProvider.js"
import { saveNews } from "./NewsProvider.js"

const contentTarget = document.querySelector(".dashboard")
const eventHub = document.querySelector(".container")

// create a function to find the matching username to userId
const userId = getItem(user.id)


export const NewsForm = () => {
    
contentTarget.innerHTML = `<h2>News Entry</h2>
    <fieldset class="form">
    <p class="newsDate" id="newsDate">Date: ${Date.now()}</p>
    <!-- username will go here --!>
    <p class="username" id="userName">USER NAME</p>
    <label for="url"> URL </label>
    <input type="text" name="url" class="url-field" id="newsURL">
    <label for="title">News Title</label>
    <textarea class="news-title" name="newsTitle" id="newsTitle" rows="3"></textarea>
    <label for="newsSynopsis">Synopsis:</label>
    <textarea class="news-synopsis" name="newsSynopsis" id="newsSynopsis" rows="8"></textarea>
    
    <button type="submit" class="button-record" id="saveNews">Save News Article</button>
    
</fieldset>`;
};

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNews"){

        let date = document.getElementById("newsDate")
        let user = document.getElementById("userName")
        let url = document.getElementById("newsURL")
        let title = document.getElementById("newsTitle")
        let synopsis = document.getElementById("newsSynopsis")

        if (date.value && user.value && url.value && title.value && synopsis.value !== "") {
            const newArticle = {
                date: date.value,
                user: user.value,
                url: url.value,
                title: title.value,
                synopsis: synopsis.value
            }
            saveEntry(newEntry)
            date.value = ""
            user.value = ""
            url.value = ""
            title.value = ""
            synopsis.value = ""
        }
    }
})
