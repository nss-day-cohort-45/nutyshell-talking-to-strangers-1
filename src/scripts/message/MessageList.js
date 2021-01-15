//Anna Moore
//the goal of this module is 

import { GetMessages, UseMessages, SaveMessage, DeleteMessage } from "./MessageProvider.js"
import { MessageHTMLConverter } from "./Message.js"

const contentTarget = document.querySelector(".message--list")
const eventHub = document.querySelector(".container")


let appStateMessage = []
//an event listener for send button to update message list
eventHub.addEventListener("click", (event) => {
    if(event.target.id === "sendBtn"){
        MessageList()
    }
})

//render function
const render = () =>{
    contentTarget.innerHTML = appStateMessage.map( (m) => MessageHTMLConverter(m)).join("")
} 

//standard list function 
export const MessageList = () => {
    GetMessages()
    .then( () => appStateMessage = UseMessages())
    .then( () => { 
        render()
        })
}