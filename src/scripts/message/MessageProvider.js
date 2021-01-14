//Anna Moore
//the goal of this module is interact with the json database 
//and provide the necessary messages array

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

