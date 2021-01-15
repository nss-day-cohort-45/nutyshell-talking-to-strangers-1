//Anna Moore
//the goal of this module is display the message form, t
//ake the message that the user has typed and put it in the database
import { GetMessages, UseMessages, SaveMessage } from "./MessageProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector("#messageForm") //where are the msg appering?

//how do I define/gather the information on the friend the message was sent to ???

//an event hub for the text field being completed and "Enter" 
//or a send button being clicked
eventHub.addEventListener("click", clickEvent =>{
    if(clickEvent.target.id === "sendBtn"){
        const message = document.querySelector("#messageString").value
        const userId = parseInt(sessionStorage.getItem("activeUser"))
        
        const newMessage = {
            userId: userId,
            friendId: null, //how to fill this/ access this?????
            message: message,
            timestamp: Date.now()
        }
        SaveMessage(newMessage)
    }
})


// a render function to display the new chat message that has been added
const render = () => {
    //??const messageCollection = useMessages()
    contentTarget.innerHTML = `<section class="field is-2 ml-6 mt-6 mb-6">
    <p> please place message here. </p>
    <input id="messageString" type="text" required placeholder="type here">
    <button class="button mt-3  is-info" type="button" id="sendBtn" >Send</button>
    </section>
    `
}


export const MessageForm = () => {
    GetMessages()
    .then( () => render())
}