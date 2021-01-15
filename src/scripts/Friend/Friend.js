// This module converts the list of friends created in the FriendList module into an HTML representation that is then called in the Friendlist module.
// When a user clicks the "Delete Friend" button, the friend is removed from the UI and database.
// -Christina

import { DeleteFriend } from "./FriendProvider.js"

const eventHub = document.querySelector("#container")

export const FriendHTMLConverter = (friendObj) => {
  return `
          <div class="friend--name"><b>Username:</b>${friendObj.friend}</div>
          <button id="deleteFriend--${friendObj.id}">Delete Friend</button>
  `
}


eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("deleteFriend--")) {
      const [prefix, friendId] = clickEvent.target.id.split("--")
     DeleteFriend(friendId)
  }
})
