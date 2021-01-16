/*
Form used to save a task to the API 
  -Christopher Lunetta
*/

import { SaveTask } from "./TaskProvider.js";

const eventHub = document.querySelector("#container");
const contentTarget = document.querySelector("#taskFormContainer");

// if save button is clicked record the task info to the api
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveTask") {
    let taskName = document.querySelector("#taskName").value;
    let taskDate = document.querySelector("#taskDate").value;

    // properties of the new task
    const newTask = {
      userId: parseInt(sessionStorage.getItem("activeUser")),
      name: taskName,
      date: taskDate,
      complete: false,
    };
    SaveTask(newTask).then(
      // removes the is-active class from the modal to hide it from view.
      document.getElementById("taskForm").classList.remove("is-active")
    );
  }
});

// adds is-active class to modal to show on screen
eventHub.addEventListener("click", (event) => {
  if (event.target.id === "openTaskForm") {
    document.getElementById("taskForm").classList.add("is-active");
  }
});

// removes the is-active class from the modal to hide it from view.
eventHub.addEventListener("click", (event) => {
  if (event.target.id === "closeTaskForm") {
    document.getElementById("taskForm").classList.remove("is-active");
  }
});

// form HTML representation
export const TaskForm = () => {
  contentTarget.innerHTML = `
  <div id="taskForm" class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Add Task</p>
      <button id="closeTaskForm" class="delete" aria-label="close"></button>
    </header>

    <section class="modal-card-body">

      <!-- Task name input -->
      <div class="field">
        <label class="label">Task Name</label>
        <div class="control">
          <input id="taskName" class="input" type="text" placeholder="Task Name">
        </div>
      </div>

      <!-- Date input -->
      <div class="field">
        <label class="label">Due Date</label>
        <div class="control">
          <input id="taskDate" class="input" type="date">
        </div>
      </div>

    <!-- Save and cancel buttons -->
    <footer class="modal-card-foot">
      <button id="saveTask" class="button is-success">Save</button>
      <button id="closeTaskForm" class="button">Cancel</button>
    </footer>
  </div>

  `;
};