var inputAddTask = document.querySelector("#task");
var btnAddTask = document.querySelector(".btn-add-task");
var todosForm = document.querySelector(".todos-form");
var count = 0;

var addTask = function (e) {
  var taskName = inputAddTask.value;
  e.preventDefault();
  if (taskName !== "") {
    var value = taskName.replaceAll("<", "&lt;");
    var task = document.createElement("div");
    task.classList.add("todos-task");
    task.innerHTML = `
    <span class="task-name">${value}</span>
    <div class="edit-icon">
        <i class="fa-solid fa-pen-to-square change"></i>
        <i class="fa-solid fa-trash close"></i>
    </div>
    `;
    todosForm.appendChild(task);
    inputAddTask.value = "";
    resetEdit(e, taskName);
  }
};

btnAddTask.addEventListener("click", function (e) {
  addTask(e);
});

inputAddTask.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addTask(e);
  }
});

function resetEdit(e, taskName) {
  var event = e;
  if (taskName !== "") {
    var value = taskName.replaceAll("<", "&lt;").replaceAll('"', "&quot;");
    var task = document.createElement("div");
    task.classList.add("todos-task");
    task.innerHTML = `
    <span class="task-name">${value}</span>
    <div class="edit-icon">
        <i class="fa-solid fa-pen-to-square change"></i>
        <i class="fa-solid fa-trash close"></i>
    </div>
    `;

    var taskNameList = document.querySelectorAll(".task-name");
    taskNameList.forEach(function (item) {
      if (item.style.color === "") {
        item.style.color = "white";
        item.addEventListener("click", function () {
          if (item.style.opacity === "" || item.style.textDecoration === "") {
            item.style.opacity = "0.4";
            item.style.textDecoration = "line-through";
          } else {
            item.style.opacity = "";
            item.style.textDecoration = "";
          }
        });
      }
    });

    var removeTasks = document.querySelectorAll(".close");
    var changeTasks = document.querySelectorAll(".change");
    removeTasks.forEach(function (removeTask) {
      removeTask.addEventListener("click", function (e) {
        e.target.parentElement.parentElement.remove();
      });
    });
    changeTasks.forEach(function (changeTask) {
      changeTask.addEventListener("click", function (e) {
        var check = changeTask.parentElement.previousElementSibling;
        e.target.parentElement.parentElement.outerHTML = `
        <div class="todos-main" style="margin-top: 32px;">
                    <input type="text" id="task" class="value-change" value="${value}" placeholder="Update Task">
                    <button class="btn-add-task change-task">Add Task</button>
                </div>
        `;
        var completeChangeList = document.querySelectorAll(".change-task");
        var valueChangeList = document.querySelectorAll(".value-change");
        valueChangeList.forEach(function (valueChange) {
          valueChange.addEventListener("keyup", function (e) {
            if (e.key === "Enter") {
              var exchange = valueChange.value.replaceAll("<", "&lt;");
              e.target.parentElement.outerHTML = `
            <div class = "todos-task">
            <span class="task-name check${++count}">${exchange}</span>
            <div class="edit-icon">
                <i class="fa-solid fa-pen-to-square change"></i>
                <i class="fa-solid fa-trash close"></i>
            </div>
            </div>
            `;
              if (check.style.opacity !== "") {
                var checkList = document.querySelectorAll(".task-name");
                checkList.forEach(function (checkItem) {
                  if (checkItem.classList.contains(`check${count}`)) {
                    checkItem.style.opacity = "0.4";
                    checkItem.style.textDecoration = "line-through";
                  }
                });
              }
              resetEdit(event, exchange);
            }
          });
        });
        completeChangeList.forEach(function (completeChange) {
          completeChange.addEventListener("click", function (e) {
            e.preventDefault();
            var exchange = e.target.previousElementSibling.value.replaceAll(
              "<",
              "&lt;"
            );
            e.target.parentElement.outerHTML = `
            <div class = "todos-task">
            <span class="task-name check${count}">${exchange}</span>
            <div class="edit-icon">
                <i class="fa-solid fa-pen-to-square change"></i>
                <i class="fa-solid fa-trash close"></i>
            </div>
            </div>
            `;
            if (check.style.opacity !== "") {
              var checkList = document.querySelectorAll(".task-name");
              checkList.forEach(function (checkItem) {
                if (checkItem.classList.contains(`check${count}`)) {
                  checkItem.style.opacity = "0.4";
                  checkItem.style.textDecoration = "line-through";
                }
              });
            }
            resetEdit(event, exchange);
          });
        });
      });
    });
  }
}
