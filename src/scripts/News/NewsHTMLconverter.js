//This module allows for the conversion of a news object from the database into HTML
// -Ron

const eventHub = document.querySelector(".container")

let user;

if (sessionStorage.getItem("activeUser") !== null){
    user = parseInt(sessionStorage.getItem("activeUser"))
    console.log(user)
}
export const NewsHTMLconverter = (newsObj) => {
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
  </div></div></div></article>
    `
}