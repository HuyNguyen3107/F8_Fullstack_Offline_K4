import React, { Component } from "react";
import "../assets/css/home.css";
import { Fragment } from "react";
import {
  notifySuccess,
  notifyError,
  ToastBox,
} from "../Extension/jsx/toastify";
import TodoChange from "./todoChange";
import TodoDefault from "./todoDefault";
import { loading } from "../main";
import { client } from "../configs/client";

export class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: props.todoList,
      changeStatus: false,
      onLogout: props.onLogout,
    };
  }
  handleDeleteTodo = async (_id) => {
    loading.style.display = "flex";
    const { response } = await client.delete(`/todos/${_id}`);
    loading.style.display = "";
    if (response.ok) {
      notifySuccess("Xóa Todo thành công");
      const listTodo = this.state.todoList;
      const index = listTodo.findIndex((todo) => todo._id === _id);
      listTodo.splice(index, 1);
      this.setState({
        todoList: listTodo,
      });
    } else {
      this.state.onLogout();
    }
  };
  idChange = [];
  handleRemoveId = (id) => {
    const index = this.idChange.findIndex((_id) => id === _id);
    this.idChange.splice(index, 1);
  };
  isChange = async (status = false, id) => {
    if (id) {
      this.idChange.push(id);
    }
    const { data, response } = await client.get("/todos");
    if (response.ok) {
      this.setState({
        todoList: data.data.listTodo,
        changeStatus: status,
      });
    } else {
      this.state.onLogout();
    }
  };
  handleCompleted = (inputEL, labelEL) => {
    if (inputEL.style.textDecoration === "") {
      inputEL.style.textDecoration = "line-through";
      labelEL.innerText = "Completed";
    } else {
      inputEL.style.textDecoration = "";
      labelEL.innerText = "Not Completed";
    }
  };
  render() {
    return (
      <Fragment>
        {[...Array.from(this.state.todoList)].map(
          ({ _id, todo, isCompleted }) => {
            return (
              <div
                className="todo-item"
                key={_id}
                status={`${isCompleted}`}
                id={_id}
              >
                <input
                  type="text"
                  className="item-content"
                  disabled
                  placeholder={todo}
                  style={isCompleted ? { textDecoration: "line-through" } : {}}
                />
                {this.idChange.includes(_id) ? (
                  <TodoChange
                    onCompleted={this.handleCompleted}
                    onChange={this.isChange}
                    onRemoveId={this.handleRemoveId}
                    onDeleteTodo={this.handleDeleteTodo}
                    id={_id}
                    todo={todo}
                    isCompleted={`${isCompleted}`}
                    onLogout={this.state.onLogout}
                  />
                ) : (
                  <TodoDefault
                    _id={_id}
                    todo={todo}
                    onDeleteTodo={this.handleDeleteTodo}
                    onChange={this.isChange}
                  />
                )}
              </div>
            );
          }
        )}
        <ToastBox />
      </Fragment>
    );
  }
}

export default TodoItem;
