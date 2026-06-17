function domLoaded() {
  const addButton = document.querySelector("#add-btn");
  const textBox = document.querySelector("#new-task");

  addButton.addEventListener("click", addBtnClick);

  textBox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      addBtnClick();
    }
  });
}

function addBtnClick() {
  const textBox = document.querySelector("#new-task");
  const newTask = textBox.value;

  if (newTask !== "") {
    addTask(newTask);

    textBox.value = "";
    textBox.focus();
  }
}

function addTask(newTask) {
  const listItem = document.createElement("li");

  listItem.innerHTML =
    '<span class="task-text">' +
    newTask +
    '</span><button class="done-btn">&#10006;</button>';

  const taskList = document.querySelector("ol");
  taskList.appendChild(listItem);

  const doneButtons = document.querySelectorAll(".done-btn");
  const lastDoneButton = doneButtons[doneButtons.length - 1];

  lastDoneButton.addEventListener("click", removeTask);
}

function removeTask(event) {
  const listItem = event.target.parentNode;
  const taskList = listItem.parentNode;

  taskList.removeChild(listItem);
}

document.addEventListener("DOMContentLoaded", domLoaded);