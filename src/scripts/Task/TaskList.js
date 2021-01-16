/*
Renders Tasks to DOM, updates if user adds or deletes an task, and opens modal form for adding a new task
  -Christopher Lunetta
*/

import { TaskHTML } from "./Task.js";
import { CompleteTask, DeleteTask, GetTasks, UseTasks } from "./TaskProvider.js";

const eventHub = document.querySelector("#container");
const contentTarget = document.querySelector("#taskListContainer");

// listen for when task api state is changed
eventHub.addEventListener("taskStateChanged", (customEvent) => {
  let updatedTasks = UseTasks();
  render(updatedTasks);
});

// listener for when Delete button is clicked on task card
eventHub.addEventListener("click", (event) => {
  if (event.target.id.startsWith("taskDelete--")) {
    const [prefix, id] = event.target.id.split("--");

    DeleteTask(id);
  }
});

// listener for when task is complete to hide the task from the dom
eventHub.addEventListener("click", (event) => {
  if (event.target.id.startsWith("completeTask--")) {
    const [prefix, id] = event.target.id.split("--");

    const tasks = UseTasks();
    const taskCompleted = tasks.find((task) => {
      return task.id === parseInt(id);
    });
    taskCompleted.complete = true
    CompleteTask(taskCompleted);
  }
});

// listener for when New task is clicked for the task form modal to show
eventHub.addEventListener("click", (event) => {
  if (event.target.id === "openTaskForm") {
    document.getElementById("taskForm").classList.add("is-active");
  }
});

// Gets the tasks from the API and uses the data to render the existing ones.
export const TaskList = () => {
  GetTasks().then(() => {
    let Tasks = UseTasks();
    render(Tasks);
  });
};

// renders the html representation into the DOM
const render = (tasks) => {
  contentTarget.innerHTML = `
    <div class="tile is-ancestor is-6">
    <div class="tile">
      <div class="tile is-parent is-vertical is-flex">
        <p class="title">Tasks</p>
        <div id="nextTaskBg" class="tile is-child box" is-flex-direction-column is-flex-wrap-wrap>
        <table class="table">
          <thead>
            <tr>
            <th>Completed</th>
            <th>Task</th>
            <th>Due Date</th>
            <th></th>
            </tr>
          </thead>
          <tbody>
        ${tasks
          .map((taskObject) => {
            return TaskHTML(taskObject);
          })
          .join("")}
          </tbody>
          </table>
          </div>
          <a id="openTaskForm" class="button">Add Task</a>
      </div>
    </div>
  `;
};
