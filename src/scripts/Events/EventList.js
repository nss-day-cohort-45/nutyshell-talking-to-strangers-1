/*
Renders Events to DOM, updates if user adds or deletes an event, and opens modal form for adding a new event
  -Christopher Lunetta
  */

import { EventHTML } from "./Event.js";
import { DeleteEvent, GetEvents, UseEvents } from "./EventProvider.js";

const eventHub = document.querySelector("#container");
const contentTarget = document.querySelector("#eventListContainer");

// listen for when event api state is changed
eventHub.addEventListener("eventStateChanged", (customEvent) => {
  let events = UseEvents();
  render(events);
});

// listener for when Delete button is clicked on event card
eventHub.addEventListener("click", (event) => {
  if (event.target.id.startsWith("eventDelete--")) {
    const [prefix, id] = event.target.id.split("--");

    DeleteEvent(id);
  }
});

// listener for when New event is clicked for the event form modal to show
eventHub.addEventListener("click", (event) => {
  if (event.target.id === "openEventForm") {
    document.getElementById("eventForm").classList.add("is-active");
  }
});

// Gets the events from the API and uses the data to render the existing ones.
export const EventList = () => {
  GetEvents().then(() => {
    let events = UseEvents();
    render(events);
  });
};

// renders the html representation into the DOM and if its the next event adds CSS classes to stand out.
const render = (events) => {
  contentTarget.innerHTML = `
    <div class="tile is-ancestor is-6">
    <div class="tile">
      <div class="tile is-parent is-vertical is-flex">
        <p class="title">Events</p>
        ${events
          .map((eventObject) => {
            return EventHTML(eventObject);
          })
          .join("")}
          <a id="openEventForm" class="button">Add Event</a>
      </div>
    </div>
  `;
  // the first event chronologically in the array of events.
  if (events[0]) {
    document
      .getElementById("nextEvent")
      .classList.add("has-text-weight-bold", "is-size-1");
    document
      .getElementById("nextEventBg")
      .classList.add("has-background-primary-light", "tileBorder");
  }
};
