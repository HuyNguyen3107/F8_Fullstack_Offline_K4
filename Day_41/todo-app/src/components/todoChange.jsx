import React, { Component } from "react";
import "../assets/css/home.css";
import { loading } from "../main";
import { client } from "../configs/client";
import {
  notifyError,
  notifyPending,
  notifySuccess,
} from "../Extension/jsx/Toastify";

export class TodoChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onCompleted: props.onCompleted,
      onChange: props.onChange,
      onRemoveId: props.onRemoveId,
      id: props.id,
      todo: props.todo,
      isCompleted: props.isCompleted,
      onDeleteTodo: props.onDeleteTodo,
      onLogout: props.onLogout,
      listTodo: props.listTodo,
    };
  }
  handleOut = (inputEL) => {
    inputEL.value = this.state.todo;
    this.state.isCompleted === "false"
      ? (inputEL.style.textDecoration = "")
      : (inputEL.style.textDecoration = "line-through");
    this.state.onRemoveId(this.state.id);
    this.state.onChange(false);
  };

  handleOutUpdated = (inputEL, todo, isCompleted) => {
    inputEL.value = todo;
    isCompleted === "true"
      ? (inputEL.style.textDecoration = "line-through")
      : (inputEL.style.textDecoration = "");
    this.state.onRemoveId(this.state.id);
    this.state.onChange(false, null, true);
  };

  handleUpdate = async (inputEL, labelEL, id) => {
    const todo = inputEL.value;
    if (todo) {
      let isCompleted;
      if (labelEL.innerText === "Not Completed") {
        isCompleted = false;
      } else {
        isCompleted = true;
      }
      loading.style.display = "flex";
      const { data, response } = await client.patch(`/todos/${id}`, {
        todo,
        isCompleted,
      });
      loading.style.display = "";
      if (response.ok) {
        notifySuccess("Cập nhật Todo thành công");
        this.setState({
          todo: data.data.todo,
          isCompleted: data.data.isCompleted + "",
        });
        this.handleOutUpdated(
          inputEL,
          data.data.todo,
          data.data.isCompleted + ""
        );
      } else {
        this.state.onLogout();
      }
    } else {
      notifyPending("Nội dung công việc cần chứa ít nhất 1 ký tự");
    }
  };

  render() {
    return (
      <div className="editing">
        <div className="is-completed">
          <label
            htmlFor={this.state.id}
            onClick={(e) => {
              const checkbox = e.target.nextElementSibling;
              if (checkbox.checked) {
                checkbox.checked = false;
                const inputEL =
                  e.target.parentElement.parentElement.previousElementSibling;
                this.state.onCompleted(inputEL, e.target);
              } else {
                checkbox.checked = true;
                const inputEL =
                  e.target.parentElement.parentElement.previousElementSibling;
                this.state.onCompleted(inputEL, e.target);
              }
            }}
          >
            {this.state.isCompleted === "true" ? "Completed" : "Not Completed"}
          </label>
          <input
            type="checkbox"
            checked={this.state.isCompleted === "true"}
            name={this.state.id}
            id={this.state.id}
            onChange={(e) => {
              e.target.removeAttribute("checked");
              const inputEL =
                e.target.parentElement.parentElement.previousElementSibling;
              const labelEL = e.target.previousElementSibling;
              this.state.onCompleted(inputEL, labelEL);
            }}
          />
        </div>
        <div className="editable">
          <button
            className="out-update"
            onClick={(e) => {
              const inputEL =
                e.target.parentElement.parentElement.previousElementSibling;
              inputEL.disabled = true;
              this.handleOut(inputEL);
            }}
          >
            Thoát
          </button>
          <button
            className="change"
            onClick={(e) => {
              const inputEL =
                e.target.parentElement.parentElement.previousElementSibling;
              const labelEL =
                e.target.parentElement.previousElementSibling.firstElementChild;
              this.handleUpdate(inputEL, labelEL, this.state.id);
            }}
          >
            Update
          </button>
          <button
            className="delete"
            onClick={() => {
              this.state.onDeleteTodo(this.state.id);
            }}
          >
            Xóa
          </button>
        </div>
      </div>
    );
  }
}

export default TodoChange;
