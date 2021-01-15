export const EventHTML = (event) => {
  return `
    <div id="nextEventBg" class="tile is-child box is-4" is-flex-direction-column is-flex-wrap-wrap>
      <div class="level">
        <p id="nextEvent" class="title">${event.name}</p>
        <a id="eventDelete--${event.id}" class="button is-danger is-outlined level-right is-small">
          <span id="eventDelete--${event.id}">Delete</span>
          <span class="icon is-small">
            <i id="eventDelete--${event.id}" class="fas fa-times"></i>
          </span>
        </a>
      </div>
      <div>
        <p class="">${event.date}</p>
        <p class="">${event.location}</p>
        <a class="button" disabled>Show Weather</a>
      </div>
    </div>
  `;
};
