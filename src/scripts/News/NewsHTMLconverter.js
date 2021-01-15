//This module allows for the conversion of a news object from the database into HTML
// -Ron
import { GetUsers, UseUsers} from "../user/UserDataProvider.js"


const eventHub = document.querySelector(".container")

let user;

if (sessionStorage.getItem("activeUser") !== null){
    user = parseInt(sessionStorage.getItem("activeUser"))
 
}

const userList = UseUsers()
console.log(userList)


export const NewsHTMLconverter = (newsObj, user) => {
    return `
    <div class="box ml-6 mr-6 mb-4">
    <article class="media">
      
      <div class="media-content">
        <div class="content">
  <p class="title"></p>
  <p>User: ${user}</p>
  <p>Date: ${newsObj.date}</p>
  <p>URL:<a href="${newsObj.url}">${newsObj.url}</a></p>
  <p>Title: ${newsObj.title}</p>
  <p>Synopis: ${newsObj.synopsis}</p>
  <div class="control  is-flex is-justify-content-center">
  <button class="button mt-3 ml-6 is-danger" id="deleteNews--${newsObj.id}">Delete News Article</button>
</div>
  </div></div></div></article>

    `
}

