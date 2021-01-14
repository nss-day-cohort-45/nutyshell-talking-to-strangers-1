//Anna Moore
//the goal of this module is interact with the json database 
//and provide the necessary messages array

const eventHub = document.querySelector(".container")
//intialize empthy array
let messages = []

//gather the message
export const getMessages = () => {
    return fetch ('http://localhost:8088/messages')
    .then(response =>response.json())
    .then(parsedMessages => {
        messages = parsedMessages
    })
}

//provides a copy of the messages array 
export const useMessages = () => messages.slice()

//saves the message to the json database
export const saveMessage = message => {
    return fetch('http://localhost:8088/messages', {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
    .then(getMessages)
    .then(dispatchMessageChangeEvent)
}

export const deleteMessage = messageId => {
    return fetch(`http://localhost:8088/messages/${messageId}`, {
        method: "DELETE"
    })
    .then(getMessages)
    .then(dispatchMessageChangeEvent)
  }

  //update 
  eventHub.addEventListener("deleteMessage", e => {
      deleteMessage(e.detail.chosenMessageId)
  })
//wondering about creating a delete and edit functions 
//and event listeners for each one