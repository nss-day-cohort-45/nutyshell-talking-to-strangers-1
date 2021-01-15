//Anna Moore
//the goal of this module is place json data of the messages into HTML format 

//note that userId should be changed for username (Ron is currently working on this function)
export const MessageHTMLConverter = (messageObj) => {
    return `
    <section class=""message id= > 
        <h3 class="message__title"> Chat History </h3>
        <div class="message__text" >${messageObj.message} </div>
        <div class="message__time" >${ new Date(messageObj.timestamp).toLocaleDateString('en-US')  } </div>
        <div class="message__userId" >${messageObj.userName} </div> 
    </section>
    `
}
