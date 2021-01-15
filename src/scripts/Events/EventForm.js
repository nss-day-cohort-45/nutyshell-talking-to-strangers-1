/*
Author Christopher Lunetta
Form used to save an event to the API 
*/

import { SaveEvent } from "./EventProvider.js";

const eventHub = document.querySelector("#container");
const contentTarget = document.querySelector("#eventFormContainer");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveEvent") {
    let eventName = document.querySelector("#eventName").value;
    let eventDate = document.querySelector("#eventDate").value;
    let eventLocation = document.querySelector("#eventLocation").value;

    const newEvent = {
      userId: parseInt(sessionStorage.getItem("activeUser")),
      name: eventName,
      date: eventDate,
      location: eventLocation,
    };
    SaveEvent(newEvent).then(
      document.getElementById("closeEventForm").classList.remove("is-active")
    );
  }
});

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "openEventForm") {
    document.getElementById("eventForm").classList.add("is-active");
  }
});

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "closeEventForm") {
    document.getElementById("eventForm").classList.remove("is-active");
  }
});

export const EventForm = () => {
  contentTarget.innerHTML = `
  <div id="eventForm" class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Add Event</p>
      <button id="closeEventForm" class="delete" aria-label="close"></button>
    </header>

    <section class="modal-card-body">

      <!-- Event name input -->
      <div class="field">
        <label class="label">Event Name</label>
        <div class="control">
          <input id="eventName" class="input" type="text" placeholder="Event Name">
        </div>
      </div>

      <!-- Date input -->
      <div class="field">
        <label class="label">Date</label>
        <div class="control">
          <input id="eventDate" class="input" type="date">
        </div>
      </div>

      <!-- Location input -->
      <div class="field">
        <label class="label">Location</label>
        <div class="control">
          <input id="eventLocation" class="input" type="text" placeholder="Location">
        </div>
      </div>
    </section>

    <!-- Save and cancel buttons -->
    <footer class="modal-card-foot">
      <button id="saveEvent" class="button is-success">Save changes</button>
      <button id="closeEventForm" class="button">Cancel</button>
    </footer>
  </div>

  `;
};
