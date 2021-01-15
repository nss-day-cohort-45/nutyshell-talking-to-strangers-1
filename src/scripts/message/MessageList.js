//Anna Moore
//the goal of this module is 

import { GetMessages, UseMessages, SaveMessage, DeleteMessage } from "./MessageProvider.js"
import { MessageHTMLConverter } from "./Message.js"
import { GetUsers, UseUsers } from "../user/UserDataProvider.js"

const contentTarget = document.querySelector(".message--list")
const eventHub = document.querySelector(".container")


let appStateMessages = []
let userArray = []
//an event listener for send button to update message list
eventHub.addEventListener("click", (event) => {
    if(event.target.id === "sendBtn"){
        MessageList()
    }
})

// listener for when Delete button is clicked on message
eventHub.addEventListener("click", (event) => {
    if (event.target.id.startsWith("deleteMessage")){
      const [prefix, id] = event.target.id.split("--");
  
      DeleteMessage(id);
      MessageList()
    }
  });

//render function
//join two data collections together with their common key/value pair
const render = () =>{
    const messagesWithUsername= appStateMessages.map( (m) => {
        m.userName = userArray.find((user)=> user.id === m.userId).username
        return m
    })
    contentTarget.innerHTML =  `<h1 class="message__title is-size-1 px-4"> Chat History </h1> ${messagesWithUsername.map( (m) => MessageHTMLConverter(m)).join("")}`
} 
//standard list function 
//GetMessages() and GetUser() are both asyn functions so .then()
export const MessageList = () => {
    GetMessages()
    .then( () => GetUsers())
    .then( () =>  {
        userArray = UseUsers()
        appStateMessages = UseMessages()

        render()
    })
    
}