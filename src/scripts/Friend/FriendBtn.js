// This module makes the "view friends" button that will be in the header of the DOM.
// When the button is clicked, the event listener dispatches a custom event. 
// -Christina

const contentTarget = document.querySelector("#viewFriendsBtn")
const eventHub = document.querySelector("#container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "viewFriends") {
        const customEvent = new CustomEvent("viewFriendsClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ViewFriendsButton = () => {
    contentTarget.innerHTML = "<button id='viewFriends'>View Friends</button>"
}