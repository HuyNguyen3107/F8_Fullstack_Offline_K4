import * as functions from "../js/json.js";

const { getTasks, getTask, postTask, updateTask, deleteTask } = functions;

const search = document.querySelector(".search");
const searchTool = document.querySelector(".search-tool");
const searchBtn = document.querySelector(".search-btn");

const btnAdd = document.querySelector(".btn-add");

const todosContentIncomplete = document.querySelector(
  ".todos-content-incomplete"
);
const todosIncomplete = document.querySelector(".todos-incomplete");
const todosEdit = document.querySelector(".todos-edit");

const deleteBtnList = document.querySelectorAll(".delete");
const changeBtnList = document.querySelectorAll(".change");
const checkBtnList = document.querySelectorAll(".check");

const quantityCompleted = document.querySelector(".quantity-completed");

const todosContentCompleted = document.querySelector(
  ".todos-content-completed"
);
const todosCompleted = document.querySelector(".todos-completed");

const edit = document.querySelector(".edit");
const editContent = document.querySelector(".edit-content");
const editValue = document.querySelector(".edit-value");
const saveBtn = document.querySelector(".btn-save");
const cancelBtn = document.querySelector(".btn-cancel");
const overlay = document.querySelector(".overlay");

searchTool.focus();

let checkAdd = false;
let checkChange = false;

let elementChange;
let changeId;

let count = todosContentCompleted.children.length;
let countTextNode = document.createTextNode(count);
quantityCompleted.insertBefore(
  countTextNode,
  quantityCompleted.firstElementChild
);

const counter = function () {
  countTextNode.data = todosContentCompleted.children.length;
};

const counterFind = function () {
  let count = 0;
  Array.from(todosContentCompleted.children).forEach(function (item) {
    if (item.style.display !== "none") {
      count += 1;
    }
  });
  countTextNode.data = count;
};

const renderTask = function (value, status, taskId) {
  if (!status) {
    const divIncompleteTask = document.createElement("div");
    divIncompleteTask.classList.add("todos-incomplete");
    const span = document.createElement("span");
    span.innerText = value;
    divIncompleteTask.append(span);
    const divEdit = document.createElement("div");
    divEdit.classList.add("todos-edit");
    const btnDelete = document.createElement("button");
    const btnChange = document.createElement("button");
    const btnCheck = document.createElement("button");
    btnDelete.classList.add("delete");
    btnChange.classList.add("change");
    btnCheck.classList.add("check");
    btnDelete.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    btnChange.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    btnCheck.innerHTML = `<i class="fa-solid fa-check-to-slot"></i>`;
    btnDelete.addEventListener("click", function (e) {
      e.preventDefault();
      let deleteId = taskId;
      deleteTask(deleteId);
      if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
      } else {
        e.target.parentElement.parentElement.parentElement.remove();
      }
      counter();
    });
    btnChange.addEventListener("click", function (e) {
      e.preventDefault();
      checkChange = true;
      edit.style.display = "block";
      let value;
      let element;
      if (e.target.classList.contains("change")) {
        element = e.target.parentElement.parentElement.firstElementChild;
        value = e.target.parentElement.parentElement.innerText;
      } else {
        element =
          e.target.parentElement.parentElement.parentElement.firstElementChild;
        value = e.target.parentElement.parentElement.parentElement.innerText;
      }
      editValue.value = value;
      elementChange = element;
      changeId = taskId;
      editValue.focus();
    });
    btnCheck.addEventListener("click", function (e) {
      e.preventDefault();
      let element;

      if (!btnCheck.classList.contains("checked")) {
        if (
          e.target.classList.contains("check") &&
          !e.target.classList.contains("checked")
        ) {
          element = e.target.parentElement.parentElement;
          e.target.classList.add("checked");
          e.target.parentElement.parentElement.remove();
          todosContentCompleted.append(element);
          counter();
          updateTask(
            {
              status: true,
            },
            taskId
          );
        } else {
          element = e.target.parentElement.parentElement.parentElement;
          e.target.parentElement.classList.add("checked");
          e.target.parentElement.parentElement.parentElement.remove();
          todosContentCompleted.append(element);
          counter();
          updateTask(
            {
              status: true,
            },
            taskId
          );
        }
      } else {
        if (e.target.classList.contains("checked")) {
          element = e.target.parentElement.parentElement;
          e.target.classList.remove("checked");
          e.target.parentElement.parentElement.remove();
          todosContentIncomplete.append(element);
          counter();
          updateTask(
            {
              status: false,
            },
            taskId
          );
        } else {
          element = e.target.parentElement.parentElement.parentElement;
          e.target.parentElement.classList.remove("checked");
          e.target.parentElement.parentElement.parentElement.remove();
          todosContentIncomplete.append(element);
          counter();
          updateTask(
            {
              status: false,
            },
            taskId
          );
        }
      }
    });
    divEdit.append(btnDelete);
    divEdit.append(btnChange);
    divEdit.append(btnCheck);
    divIncompleteTask.append(divEdit);
    todosContentIncomplete.append(divIncompleteTask);
  }
};
let idDelete = 1;
deleteBtnList.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    deleteTask(idDelete);
    if (e.target.classList.contains("delete")) {
      e.target.parentElement.parentElement.remove();
    } else {
      e.target.parentElement.parentElement.parentElement.remove();
    }
    idDelete++;
    counter();
  });
});

let idChange = 1;
changeBtnList.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    checkChange = true;
    edit.style.display = "block";
    let value;
    let element;
    if (e.target.classList.contains("change")) {
      element = e.target.parentElement.parentElement.firstElementChild;
      value = e.target.parentElement.parentElement.innerText;
    } else {
      element =
        e.target.parentElement.parentElement.parentElement.firstElementChild;
      value = e.target.parentElement.parentElement.parentElement.innerText;
    }
    editValue.value = value;
    let id = idChange;
    elementChange = element;
    changeId = id;
    idChange++;
    editValue.focus();
  });
});

let idCheck = 1;
checkBtnList.forEach(function (item) {
  let id = idCheck;
  item.addEventListener("click", function (e) {
    e.preventDefault;
    let element;
    if (!item.classList.contains("checked")) {
      if (
        e.target.classList.contains("check") &&
        !e.target.classList.contains("checked")
      ) {
        element = e.target.parentElement.parentElement;
        e.target.classList.add("checked");
        e.target.parentElement.parentElement.remove();
        todosContentCompleted.append(element);
        counter();
        updateTask(
          {
            status: true,
          },
          id
        );
      } else {
        element = e.target.parentElement.parentElement.parentElement;
        e.target.parentElement.classList.add("checked");
        e.target.parentElement.parentElement.parentElement.remove();
        todosContentCompleted.append(element);
        counter();
        updateTask(
          {
            status: true,
          },
          id
        );
      }
    } else {
      if (e.target.classList.contains("checked")) {
        element = e.target.parentElement.parentElement;
        e.target.classList.remove("checked");
        e.target.parentElement.parentElement.remove();
        todosContentIncomplete.append(element);
        counter();
        updateTask(
          {
            status: false,
          },
          id
        );
      } else {
        element = e.target.parentElement.parentElement.parentElement;
        e.target.parentElement.classList.remove("checked");
        e.target.parentElement.parentElement.parentElement.remove();
        todosContentIncomplete.append(element);
        counter();
        updateTask(
          {
            status: false,
          },
          id
        );
      }
    }
  });
  idCheck++;
});

searchTool.addEventListener("focus", function () {
  searchTool.style.border = "2px solid #000";
  search.style.border = "1px solid blue";
});

searchTool.addEventListener("blur", function () {
  searchTool.style.border = "";
  search.style.border = "";
});

searchBtn.addEventListener("focus", function () {
  searchBtn.style.border = "3px solid lightblue";
});
searchBtn.addEventListener("blur", function () {
  searchBtn.style.border = "";
});

btnAdd.addEventListener("click", function () {
  btnAdd.style.border = "3px solid lightgreen";
  edit.style.display = "block";
  checkAdd = true;
  editValue.focus();
});
overlay.addEventListener("click", function () {
  editValue.value = "";
  btnAdd.style.border = "";
  edit.style.display = "";
  checkAdd = false;
  checkChange = false;
});

cancelBtn.addEventListener("click", function (e) {
  e.preventDefault();
  editValue.value = "";
  btnAdd.style.border = "";
  edit.style.display = "";
  checkAdd = false;
  checkChange = false;
});

editValue.addEventListener("focus", function () {
  editValue.style.border = "2px solid #000";
});

editValue.addEventListener("blur", function () {
  editValue.style.border = "";
});

saveBtn.addEventListener("click", async function (e) {
  e.preventDefault();
  if (checkAdd) {
    if (editValue.value) {
      let value = editValue.value;
      let data = {
        value: value,
        status: false,
      };
      postTask(data).then(() => {
        getTasks().then((taskList) => {
          let taskId = taskList[taskList.length - 1].id;
          renderTask(value, false, taskId);
        });
      });
      btnAdd.style.border = "";
      edit.style.display = "";
      editValue.value = "";
      checkAdd = false;
      checkChange = false;
    }
  }
  if (checkChange) {
    if (editValue.value) {
      updateTask(
        {
          value: editValue.value,
        },
        changeId
      );
      elementChange.innerText = editValue.value;
      btnAdd.style.border = "";
      edit.style.display = "";
      editValue.value = "";
      checkAdd = false;
      checkChange = false;
    }
  }
});

window.addEventListener("load", async function () {
  getTasks().then(async (list) => {
    if (list.length === 0) {
      postTask({
        value: `Huy's next task`,
        status: false,
      }).then(() => {
        postTask({
          value: `Smatyx Todos App`,
          status: true,
        });
      });
    }
    if (list.length === 1) {
      let id = list[0].id;
      deleteTask(id).then(() => {
        postTask({
          value: `Huy's next task`,
          status: false,
        }).then(() => {
          postTask({
            value: `Smatyx Todos App`,
            status: true,
          });
        });
      });
    }
    if (list.length >= 2) {
      for (let i = 0; i < list.length; i++) {
        if (i < list.length - 1) {
          await deleteTask(list[i].id);
        } else {
          deleteTask(list[i].id).then(() => {
            postTask({
              value: `Huy's next task`,
              status: false,
            }).then(() => {
              postTask({
                value: `Smatyx Todos App`,
                status: true,
              });
            });
          });
        }
      }
    }
  });
});

let checkShow = false;

quantityCompleted.addEventListener("click", function (e) {
  e.preventDefault();
  if (!checkShow) {
    quantityCompleted.style.backgroundColor = "#0c9774";
    quantityCompleted.lastElementChild.style.transform = `rotateZ(0deg)`;
    todosContentCompleted.style.display = "block";
    checkShow = true;
  } else {
    quantityCompleted.style.backgroundColor = "";
    quantityCompleted.lastElementChild.style.transform = ``;
    todosContentCompleted.style.display = "";
    checkShow = false;
  }
});

searchTool.addEventListener("input", function () {
  Array.from(todosContentIncomplete.children).forEach(function (item) {
    if (!item.firstElementChild.innerText.includes(searchTool.value)) {
      item.style.display = "none";
    } else {
      item.style.display = "";
      let content = item.firstElementChild.innerText;
      let index = item.firstElementChild.innerText.indexOf(
        `${searchTool.value}`
      );
      let temp = item.firstElementChild.innerText.slice(0, index);
      const b = document.createElement("b");
      b.innerText = searchTool.value;
      item.firstElementChild.innerText = temp;
      item.firstElementChild.append(b);
      item.firstElementChild.innerHTML += content.slice(
        index + searchTool.value.length
      );
    }
  });
  Array.from(todosContentCompleted.children).forEach(function (item) {
    if (!item.firstElementChild.innerText.includes(searchTool.value)) {
      item.style.display = "none";
    } else {
      item.style.display = "";
      let content = item.firstElementChild.innerText;
      let index = item.firstElementChild.innerText.indexOf(
        `${searchTool.value}`
      );
      let temp = item.firstElementChild.innerText.slice(0, index);
      const b = document.createElement("b");
      b.innerText = searchTool.value;
      item.firstElementChild.innerText = temp;
      item.firstElementChild.append(b);
      item.firstElementChild.innerHTML += content.slice(
        index + searchTool.value.length
      );
    }
  });
  counterFind();
});

// getTasks().then((data) => console.log(data))/
