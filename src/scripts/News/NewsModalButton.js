const contentTarget = document.querySelector("#newsModal")
const eventHub = document.querySelector(".container")


export const newsModalButton = () => {
    contentTarget.innerHTML =
    `
    <div class="control mb-3 ml-6 is-flex is-justify-content-left">
    <button class="button mt-3  is-info" id="newsModalButton">Expand News</button>
  </div>
  <div class="modal-card" id="newsModalContent"></div>
    `
}

