var inputAddTask = document.querySelector("#task");
var btnAddTask = document.querySelector(".btn-add-task");
var todosForm = document.querySelector(".todos-form");

btnAddTask.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputAddTask.value !== "") {
    if (inputAddTask.value.includes(">") && inputAddTask.value.includes("<")) {
      var temp = inputAddTask.value.replaceAll(">", "&gt;");
      var value = temp.replaceAll("<", "&lt;");
    }
    var task = document.createElement("div");
    task.classList.add("todos-task");
    task.innerHTML = `
    <span class="task-name">${value}</span>
    <div class="edit-icon">
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-trash"></i>
    </div>
    `;
    todosForm.appendChild(task);
  }
});
btnAddTask.addEventListener("keyup", function (e) {
  inputAddTask.value.replaceAll("<", "&lt;");
  inputAddTask.value.replaceAll(">", "&gt;");
  if (e.key === "Enter") {
    e.preventDefault();
    if (inputAddTask.value !== "") {
      var task = document.createElement("div");
      task.classList.add("todos-task");
      task.innerHTML = `
      <span class="task-name">${inputAddTask.value}</span>
      <div class="edit-icon">
          <i class="fa-solid fa-pen-to-square"></i>
          <i class="fa-solid fa-trash"></i>
      </div>
      `;
      todosForm.appendChild(task);
    }
  }
});

