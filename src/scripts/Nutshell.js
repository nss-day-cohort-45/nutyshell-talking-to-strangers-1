import { NewsForm } from "./News/NewsForm.js";
import { NewsList } from "./News/NewsList.js";
import { FriendForm } from "./Friend/FriendForm.js";
import { EventList } from "./Events/EventList.js";
import { EventForm } from "./Events/EventForm.js";
import { MessageForm } from "./Message/MessageForm.js"
import { MessageList } from "./Message/MessageList.js";

export const Nutshell = () => {
    NewsList();
    NewsForm();
    FriendForm();
    EventList();
    EventForm();
    MessageForm();
    MessageList();
  // Render all your UI components here
};
