// This module creates the dialog box that displays the active user's friends as well as the form to add a new friend.
// - Christina

import { GetFriends, UseFriends} from "./FriendProvider.js"
import { FriendForm } from "./FriendForm.js"
import { FriendList } from "./FriendList.js";

const eventHub = document.querySelector("#container");
const contentTarget = document.querySelector("#friend");

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "viewFriends") {
    document.getElementById("friendDialog").classList.add("is-active");
  }
});

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "closeViewFriends") {
    document.getElementById("friendDialog").classList.remove("is-active");
  }
});

export const FriendDialog = () => {
  GetFriends()
    .then(() => {
        const allFriends = UseFriends()
        contentTarget.innerHTML = `
          <div id="friendDialog" class="modal">
          <div class="modal-background"></div>
          <div class="modal-card">
          <header class="modal-card-head">    
          <button id="closeViewFriends" class="delete" aria-label-"close"></button>
          </header>
          <section class="modal-card-body">
          <div class="friend--form" id="friendForm"> ${FriendForm()}</div>
          <div class="friend--list" id="friendList">${FriendList(allFriends)}</div>
          </section>
          </div>
          `
      })
}