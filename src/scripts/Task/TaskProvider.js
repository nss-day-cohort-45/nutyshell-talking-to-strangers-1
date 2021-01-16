/*
Data Provider for tasks that allows access to the api to for the following functions get/use/save/delete 
  -Christopher Lunetta
*/

// container used for eventHub for listening events to bubble to and from
const eventHub = document.querySelector(".container");

// creates a CustomEvent when something is updated (saved to the API)
const dispatchStateChangeEvent = () => {
  const taskStateChangedEvent = new CustomEvent("taskStateChanged");

  // Dispatches the event to eventHub
  eventHub.dispatchEvent(taskStateChangedEvent);
};

// array of tasks when tasks are fetched using GetTasks
let tasks = [];

// Tasks are pulled from API data
export const GetTasks = () => {
  return fetch("http://localhost:8088/tasks")
    .then((response) => response.json())
    .then((parsedTasks) => {
      tasks = parsedTasks;
    });
};

// Filter tasks to only show when complete is false
// Tasks are sorted by date so the closest tasks is at the top.
export const UseTasks = () => {
  const filterComplete = tasks.filter(
    (taskObject) => taskObject.complete === false
  );
  const sortedByDate = filterComplete.sort(
    (currentTask, nextTask) =>
      Date.parse(currentTask.date) - Date.parse(nextTask.date)
  );
  return sortedByDate;
};

// If a user saves a task "POST" to API data and run dispatchStateChangeEvent
export const SaveTask = (task) => {
  return fetch("http://localhost:8088/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  })
    .then(GetTasks)
    .then(dispatchStateChangeEvent);
};

// If a user deletes a task "DELETE" the task that corresponds with the id of that task
export const DeleteTask = (taskId) => {
  return fetch(`http://localhost:8088/tasks/${taskId}`, {
    method: "DELETE",
  })
    .then(GetTasks)
    .then(dispatchStateChangeEvent);
};

export const CompleteTask = (task) => {
  return fetch(`http://localhost:8088/tasks/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  })
    .then(GetTasks)
    .then(dispatchStateChangeEvent);
};
