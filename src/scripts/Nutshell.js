import { NewsForm } from "./News/NewsForm.js";
import { NewsList } from "./News/NewsList.js";
import { FriendForm } from "./Friend/FriendForm.js";
import { EventList } from "./Events/EventList.js";
import { EventForm } from "./Events/EventForm.js";
import { MessageForm } from "./Message/MessageForm.js"

export const Nutshell = () => {
    NewsList();
    NewsForm();
    FriendForm();
    EventList();
    EventForm();
    MessageForm();
  // Render all your UI components here
};
