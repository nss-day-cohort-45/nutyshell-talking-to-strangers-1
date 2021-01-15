// This module makes the "view friends" button that will be in the header of the DOM.
// -Christina

const contentTarget = document.querySelector("#viewFriendsBtn")

export const ViewFriendsButton = () => {
    contentTarget.innerHTML = "<button id='viewFriends'>View Friends</button>"
}