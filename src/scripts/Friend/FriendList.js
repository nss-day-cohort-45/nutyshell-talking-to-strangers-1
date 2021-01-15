// This module is responsible for populating the View Friends dialog box that will show in the DOM when "View Friends" button is clicked.
// Users will be able to delete each friend individually by clicking the "delete" button next to each friend.
// The list of friends updates each time a friend is added through the FriendForm or deleted by clicking the delete button.
// -Christina

import { FriendHTMLConverter } from "./Friend.js"
import { UseUsers } from "../user/UserDataProvider.js"

const eventHub = document.querySelector("#container")

eventHub.addEventListener("friendStateChanged", () => {
FriendList()
})

const render = (friends) => {
  const users = UseUsers()
  const userID = parseInt(sessionStorage.getItem("activeUser"))
  const listOfFriends = getFriendObjects(userID, friends)
  const names = listOfFriends.map(relationship => {
    const friend = users.find((user) => {
      return user.id === relationship.friendId
    })
    relationship.friend = friend.username
    return FriendHTMLConverter(relationship)
  }).join("")
  return names
}

const getFriendObjects = (userID, friends) => {
  const matchingFriendObjects = friends.filter(currentRel => currentRel.userId === userID)
  return matchingFriendObjects
}

export const FriendList = (allFriends) => {
  return render(allFriends)
}