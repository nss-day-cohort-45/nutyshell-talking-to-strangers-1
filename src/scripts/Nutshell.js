import { NewsForm } from "./News/NewsForm.js";
import { NewsList } from "./News/NewsList.js";
import { EventList } from "./Events/EventList.js";
import { EventForm } from "./Events/EventForm.js";
import { ViewFriendsButton } from "./Friend/FriendBtn.js";
import { FriendDialog } from "./Friend/FriendDialog.js";
import { GetUsers } from "./user/UserDataProvider.js";

export const Nutshell = () => {
    // Render all your UI components here
    GetUsers();
    NewsList();
    NewsForm();
    ViewFriendsButton();
    FriendDialog();
    EventList();
    EventForm();
}
