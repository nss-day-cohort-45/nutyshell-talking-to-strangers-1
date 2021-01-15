import { NewsForm } from "./News/NewsForm.js";
import { NewsList } from "./News/NewsList.js";
import { EventList } from "./Events/EventList.js";
import { EventForm } from "./Events/EventForm.js";
import { ViewFriendsButton } from "./Friend/FriendBtn.js";
import { FriendForm } from "./Friend/FriendForm.js";
import { FriendList } from "./FriendList.js";

export const Nutshell = () => {
    // Render all your UI components here
    NewsList();
    NewsForm();
    ViewFriendsButton();
    FriendForm();
    FriendList();
    EventList();
    EventForm();
}
