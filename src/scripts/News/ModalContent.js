import { NewsList } from "./NewsList.js"
import { NewsForm } from "./NewsForm.js"


const contentTarget = document.querySelector("#newsModalContent")

export const NewsModal = () => {
    contentTarget = 
    `
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      ${NewsList()}
      ${NewsForm()}
    </section>
    `
}

eventHub.addEventListener("click", modalClick => {
    if (modalClick.target.id === ("newsModalButton"){
        NewsModal()
    }
    })