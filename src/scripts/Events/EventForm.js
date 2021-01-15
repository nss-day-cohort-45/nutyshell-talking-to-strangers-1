/*
Form used to save an event to the API 
  -Christopher Lunetta
*/

import { SaveEvent } from "./EventProvider.js";

const eventHub = document.querySelector("#container");
const contentTarget = document.querySelector("#eventFormContainer");

// if save button is clicked record the event info to the api
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveEvent") {
    let eventName = document.querySelector("#eventName").value;
    let eventDate = document.querySelector("#eventDate").value;
    let eventLocation = document.querySelector("#eventLocation").value;

    // properties of the new event
    const newEvent = {
      userId: parseInt(sessionStorage.getItem("activeUser")),
      name: eventName,
      date: eventDate,
      location: eventLocation,
    };
    SaveEvent(newEvent).then(
      // removes the is-active class from the modal to hide it from view.
      document.getElementById("eventForm").classList.remove("is-active")
    );
  }
});

// adds is-active class to modal to show on screen
eventHub.addEventListener("click", (event) => {
  if (event.target.id === "openEventForm") {
    document.getElementById("eventForm").classList.add("is-active");
  }
});

// removes the is-active class from the modal to hide it from view.
eventHub.addEventListener("click", (event) => {
  if (event.target.id === "closeEventForm") {
    document.getElementById("eventForm").classList.remove("is-active");
  }
});

// form HTML representation
export const EventForm = () => {
  contentTarget.innerHTML = `
  <div id="eventForm" class="modal">
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
