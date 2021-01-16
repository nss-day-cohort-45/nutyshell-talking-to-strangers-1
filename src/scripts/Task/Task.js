/*
HTML representation of a task
  -Christopher Lunetta
*/

export const TaskHTML = (task) => {
  return `
    <tr>
      <td><input type="checkbox" id="completeTask--${task.id}" name="task${task.id}" value="Bike"></td>
      <td><label for="task${task.id}"> ${task.name}</label><br></br></td>
      <td><p class="">${task.date}</p></td>
      <td><a id="taskDelete--${task.id}" class="button is-danger is-outlined level-right is-small">
          <span id="taskDelete--${task.id}">Delete</span>
          <span class="icon is-small">
            <i id="taskDelete--${task.id}" class="fas fa-times"></i>
          </span>
        </a>
      </td>
    </tr>
  `;
};