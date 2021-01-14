// This module fetches the "friends" data from database.json and allows us to manipulate it in various ways.
// We can use the friends data with "UseFriends," add a new friend to the array with "SaveFriend," and delete a friend with "DeleteFriends"
// -Christina

const eventHub = document.querySelector("#container")

let friends = []

export const UseFriends = () => friends.slice()

// fetch friend data
const dispatchStateChangeEvent = () => {
  const friendStateChangedEvent = new CustomEvent("friendStateChanged")
  eventHub.dispatchEvent(friendStateChangedEvent)
}


export const GetFriends = () => {
  return fetch("http://localhost:8088/friends")
      .then(response => response.json())
      .then(parsedFriends => {
        friends = parsedFriends
      })
}

// save friend data
export const SaveFriend = friend => {
  let obj = JSON.stringify(friend)
  return fetch('http://localhost:8088/friends', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: obj
  })
  .then(GetFriends)
  .then(dispatchStateChangeEvent)
}

// delete friend data
export const DeleteFriend = friendId => {
  return fetch(`http://localhost:8088/friends/${friendId}`, {
      method: "DELETE"
  })
      .then(GetFriends)
      .then(dispatchStateChangeEvent)
}
