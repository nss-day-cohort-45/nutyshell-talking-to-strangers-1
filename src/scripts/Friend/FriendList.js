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
const render = (friendsArray) => {
    const listOfFriends = friendsArray.filter((friendObj) => {
      const matchingFriendObjects = 



        const associatedCriminal = criminals.find(
            (criminal) => {
                return criminal.id === note.criminalId
            }
        )
        note.criminalName = associatedCriminal.name
        return NoteHTMLConverter(note)
        }
    ).join("")

    contentTarget.innerHTML = allNotesConvertedToStrings
}


// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    let criminals = useCriminals()
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes, criminals)
        })
}