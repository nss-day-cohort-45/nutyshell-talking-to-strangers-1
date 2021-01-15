// This module creates the "form" that will appear when the "Add Friend" button is clicked.
// It then checks to make sure the username typed into the input field is authenticated.
// If it is, the data is saved in a new entry in the "friends" section of the database, meaning the user will now appear on the active user's friend list.
// -Christina

import { SaveFriend } from "./FriendProvider.js"

const eventHub = document.querySelector("#container")

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveFriend") {
   //logic to check if user is authenticated
    const username = document.querySelector("#friendUsername").value
      return fetch(`http://localhost:8088/users?username=${username}`)
        .then(response => response.json())
        .then(users => {
          if (users.length > 0) {
            const user = parseInt(sessionStorage.getItem("activeUser"))
            const friend = users[0].id
            const newFriend = {
              userId: user,
              friendId: friend
            }
            SaveFriend(newFriend)
          }
        })
  }
})

const render = () => {
  return `
    <input type="text" id="friendUsername" placeholder="username">
    <button type="button" id="saveFriend">Save New Friend</button>
  `
}

export const FriendForm = () => {
  return render()
}