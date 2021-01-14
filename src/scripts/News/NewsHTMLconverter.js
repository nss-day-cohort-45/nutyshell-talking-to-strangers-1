const eventHub = document.querySelector(".container")

let user;

if (sessionStorage.getItem("activeUser") !== null){
    user = parseInt(sessionStorage.getItem("activeUser"))
    console.log(user)
}
export const NewsHTMLconverter = (newsObj) => {
    return `
    <div class="tile ml-6 my-2">
  <div class="tile is-4 is-vertical is-ancestor">
  <p class="title"></p>
  <p>User: ${user}</p>
  <p>Date: ${newsObj.date}</p>
  <p>URL:<a href="${newsObj.url}">${newsObj.url}</a></p>
  <p>Title: ${newsObj.title}</p>
  <p>Synopis: ${newsObj.synopsis}</p>
  </div>
    `
}