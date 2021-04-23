import { NewsForm } from "./News/NewsForm.js";
import { NewsList } from "./News/NewsList.js";
import { FriendForm } from "./Friend/FriendForm.js";
import { EventList } from "./Events/EventList.js";
import { EventForm } from "./Events/EventForm.js";
import { MessageForm } from "./Message/MessageForm.js"
import { MessageList } from "./Message/MessageList.js";
import { GetUsers } from "./user/UserDataProvider.js";

export const Nutshell = () => {
    GetUsers()
    .then(() => {
        NewsForm()
        NewsList()
        EventList()
    })
    FriendForm();
    EventForm();
    MessageForm();
    MessageList();
    
   
  // Render all your UI components here
};
