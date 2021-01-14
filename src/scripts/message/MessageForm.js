//Anna Moore
//the goal of this module is 
import { getMessages, useMessages, saveMessage } from "./MessageProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector("#messageForm") //where are the msg appering?

//needs an event hub for the text field being completed and "Enter" 
//or a send button being clicked
//how do I define/ gather the information on the user??
//how do I define/gather the information on the friend the message was sent to ???

eventHub.addEventListener("click", clickEvent =>{
    if(clickEvent.target.id === "sendBtn"){
        const message = document.querySelector("#messageString").value
        const userId = parseInt(sessionStorage.getItem("activeUser"))
        
        const newMessage = {
            userId: userId,
            friendId: friendId, //how to fill this/ access this?????
            message: message,
            timestamp: Date.now()
        }
        saveMessage(newMessage)
    }
})


// a render function to display the new chat message that has been added
const render = () => {
    //??const messageCollection = useMessages()
    contentTarget.innerHTML = `<section>
    <p> please place message here. </p>
    <input id="messageString" type="text" required placeholder="type here>
    <button type="button" id="sendBtn" >Send</button>
    </section>
    `
    //onclick="myFunction()" 
    //possible to place a function inside of the button tag
}

//idk what this function does but it looks important
export const MessageForm = () => {
    getMessages()
    .then( () => render())
}