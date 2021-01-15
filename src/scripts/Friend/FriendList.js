// render list of friends
// make delete button
// listen for state change event and rerender list


import { GetFriends, UseFriends } from "./FriendProvider.js"
import { FriendHTMLConverter } from "./Friend.js"

const contentTarget = document.querySelector("#friendList")
const eventHub = document.querySelector("#container")

eventHub.addEventListener("viewFriendsClicked", () => {
FriendList()
})

eventHub.addEventListener("noteStateChanged", () => {
FriendList()
})

// for every object in the friends array, return ones with activeUser id
// for every object with a matching userId or friendId, return username of the other one 
const render = (friends) => {
  const userID = parseInt(sessionStorage.getItem("activeUser"))
  const listOfFriends = getFriendObjects(userID, friends)
  const names = listOfFriends.map(relationship => {
    const friend = users.find((user) => {
      return user.id === relationship.friendId
    })
    relationship.friend = friend.username
    
    
  })


  contentTarget.innerHTML = listOfFriends
}

const getFriendObjects = (userID, friends) => {
  const matchingFriendObjects = friends.filter(currentRel => currentRel.userId === userID)
  return matchingFriendObjects
}

export const FriendsList = () => {
    GetFriends()
        .then(() => {
            const allFriends = UseFriends()
            render(allFriends)
        })
}