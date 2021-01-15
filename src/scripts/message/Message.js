//Anna Moore
//the goal of this module is place json data of the messages into HTML format 

//note that userId should be changed for username (Ron is currently working on this function)
export const MessageHTMLConverter = (messageObj) => {
    return `
    <section class="message level section-padding-medium px-5"  > 
        <div class="message__text level-left" >${messageObj.message} </div>
        <div class="level-right">
            <div class="message__time ml-5" >${ new Date(messageObj.timestamp).toLocaleDateString('en-US')}</div>
            <div class="message__userId ml-4" >User: ${messageObj.userName}</div>  
            <button class="button deleteMsg mt-2  is-info ml-4" id="deleteMessage--${messageObj.id}">Delete </button>
        </div>
    </section>
    `
}
