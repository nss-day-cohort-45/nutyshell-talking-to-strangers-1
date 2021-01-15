//Anna Moore
//the goal of this module is interact with the json database 
//provides the necessary messages array with useMessages(), getMessages()
//provides function to alter the database saveMessage(), and deleteMessage() 
//contains event listeners to ensure this happens at the correct time


const eventHub = document.querySelector("#container")

//intialize empthy array
let messages = []

//gather the message
export const GetMessages = () => {
    return fetch ('http://localhost:8088/messages')
    .then(response =>response.json())
    .then(parsedMessages => {
        messages = parsedMessages
    })
}

//provides a copy of the messages array 
export const UseMessages = () => messages.slice()

//saves the message to the json database
export const SaveMessage = message => {
    return fetch('http://localhost:8088/messages', {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
    .then(GetMessages)
    .then(dispatchMessageChangeEvent)
}

export const DeleteMessage = (messageId) => {
    return fetch(`http://localhost:8088/messages/${messageId}`, {
        method: "DELETE",
    })
    .then(GetMessages)
    .then(dispatchMessageChangeEvent)
  }

  //update 
  eventHub.addEventListener("deleteMessage", e => {
      deleteMessage(e.detail.chosenMessageId)
  })

  //this purpose of thus function is??
  const dispatchMessageChangeEvent = () => {
    const messageStateChangedEvent = new CustomEvent("MessageStateChanged")
    eventHub.dispatchEvent(messageStateChangedEvent)
  }
//wondering about creating a delete and edit functions 
//and event listeners for each one