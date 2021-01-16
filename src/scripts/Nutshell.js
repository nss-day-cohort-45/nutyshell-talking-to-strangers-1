import { NewsForm } from "./News/NewsForm.js";
import { NewsList } from "./News/NewsList.js";
import { FriendForm } from "./Friend/FriendForm.js";
import { EventList } from "./Events/EventList.js";
import { EventForm } from "./Events/EventForm.js";
import { TaskList } from "./Task/TaskList.js";
import { TaskForm } from "./Task/TaskForm.js";

export const Nutshell = () => {
    NewsList();
    NewsForm();
    FriendForm();
    EventList();
    EventForm();
    TaskList();
    TaskForm();
  // Render all your UI components here
};
