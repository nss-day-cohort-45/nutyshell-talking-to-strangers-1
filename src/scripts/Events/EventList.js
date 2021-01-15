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

export const EventList = () => {
  GetEvents().then(() => {
    let events = UseEvents();
    render(events);
  });
};

const render = (events) => {
  contentTarget.innerHTML = `
    <div class="tile is-ancestor">
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
  if (events[0]) {
    document
      .getElementById("nextEvent")
      .classList.add("has-text-weight-bold", "is-size-1");
    document
      .getElementById("nextEventBg")
      .classList.add("has-background-primary-light", "tileBorder");
  }
};
