"use strict";
// STORING ELEMENTS IN VARIABLES
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// CREATING ADD TASK FUNCTION:
const addTask = function (task) {
  // CREATED AN LI ELEMENT
  const listItem = document.createElement("li");
  const taskText = document.createElement("span");
  taskText.textContent = task;

  listItem.appendChild(taskText);
};

// FOR CHECK BOX:
const checkBox = document.createElement("input");
checkBox.setAttribute("type", "checkbox");
listItem.appendChild(checkBox);

// ADDING EVENT LISTENER ON FORM
todoForm.addEventListener("submit", function (e) {
  e.defaultPrevented();

  const newTask = todoInput.value;
  newTask.trim();
  if (newTask === "") {
    alert("Please add a task..");
  }
  todoInput.value = "";

  addTask();
});
