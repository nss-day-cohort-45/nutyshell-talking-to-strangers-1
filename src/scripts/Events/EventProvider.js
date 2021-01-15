/*
Author Christopher Lunetta
Data Provider for events that allows access to the api to for the following functions get/use/save/delete 
*/

// container used for eventHub for listening events to bubble to and from
const eventHub = document.querySelector(".container");

// creates a CustomEvent when something is updated (saved to the API)
const dispatchStateChangeEvent = () => {
  const eventStateChangedEvent = new CustomEvent("eventStateChanged");

  // Dispatches the event to eventHub
  eventHub.dispatchEvent(eventStateChangedEvent);
};

// array of events when events are fetched using GetEvents
let events = [];

// Events are pulled from API data
export const GetEvents = () => {
  return fetch("http://localhost:8088/events")
    .then((response) => response.json())
    .then((parsedEvents) => {
      events = parsedEvents;
    });
};

// Events are sorted by date so the closest event is at the top.
export const UseEvents = () => {
  const sortedByDate = events.sort(
    (currentEvent, nextEvent) =>
      Date.parse(currentEvent.date) - Date.parse(nextEvent.date)
  );
  return sortedByDate;
};

// If a user saves an event "POST" to API data and run dispatchStateChangeEvent
export const SaveEvent = (event) => {
  return fetch("http://localhost:8088/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  })
    .then(GetEvents)
    .then(dispatchStateChangeEvent);
};

// If a user deletes an event "DELETE" the event that corresponds with the id of that event
export const DeleteEvent = (eventId) => {
  return fetch(`http://localhost:8088/events/${eventId}`, {
    method: "DELETE",
  })
    .then(GetEvents)
    .then(dispatchStateChangeEvent);
};
