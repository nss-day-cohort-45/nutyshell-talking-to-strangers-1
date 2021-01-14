const eventHub = document.querySelector(".container")

let user = getItem(user.id)

export const NewsHTMLconverter = (newsObj) => {
    return `
    <div class="tile is-ancestor">
  <div class="tile is-4">
  <p class="title"></p>
  <p>User: ${user}</p>
  <p>Date: ${newsObj.date}</p>
  <p>URL: ${newsObj.url}</p>
  <p>Title: ${newsObj.title}</p>
  <p>Synopis: ${newsObj.synopsis}</p>
  </div>
    `
}