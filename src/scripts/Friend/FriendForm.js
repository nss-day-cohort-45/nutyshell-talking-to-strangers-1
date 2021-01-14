import { GetFriends, UseFriends, SaveFriend } from "./FriendProvider.js"

const contentTarget = document.querySelector("#friendForm")
const eventHub = document.querySelector("#container")

// Makes "Add a Friend" form.
// Makes "save" button 
// Event listener dispatching state changed

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
  contentTarget.innerHTML = `
    <input type="text" id="friendUsername" placeholder="username">
    <button type="button" id="saveFriend">Save New Friend</button>
  `
}

export const FriendForm = () => {
    GetFriends()
        .then(() => {
          const friends = UseFriends()
          render(friends)
        })
    
}