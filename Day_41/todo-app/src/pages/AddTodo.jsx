import { client } from "../configs/client";
import "../assets/css/home.css";
import {
  notifySuccess,
  notifyError,
  ToastBox,
} from "../Extension/jsx/Toastify";
import React, { Component } from "react";
import NoneTodo from "../components/NoneTodo";
import TodoItem from "../components/TodoItem";
import { loading } from "../main";

export class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      onChangeSearch: props.onChangeSearch,
      onHandleLogged: props.onHandleLogged,
    };
  }
  check = 0;
  componentDidMount = async () => {
    const token = localStorage.getItem("apiKey");
    client.setToken(token);
    loading.style.display = "flex";
    const { data, response } = await client.get("/todos");
    loading.style.display = "";
    if (response.ok) {
      this.setState({
        todoList: data.data.listTodo,
      });
    }
  };
  handleLogout() {
    client.token = null;
    loading.style.display = "flex";
    localStorage.removeItem("apiKey");
    localStorage.removeItem("userEmail");
    this.state.onHandleLogged();
  }
  handleAddTodo = async (todo) => {
    loading.style.display = "flex";
    const { data, response } = await client.post("/todos", {
      todo,
    });
    loading.style.display = "";

    if (response.ok) {
      const listTodo = this.state.todoList;
      listTodo.unshift(data.data);
      this.setState({
        todoList: listTodo,
      });
    } else {
      this.handleLogout();
    }
  };
  render() {
    if (this.check === 0) {
      setTimeout(() => {
        notifySuccess("Bạn đang ở chế độ thêm công việc");
      }, 600);
      this.check++;
    }
    loading.style.display = "";
    return (
      <div className="container">
        <div className="todo-app">
          <h1 className="todo-heading">Welcome to Todo App!</h1>
          <form className="add-todo">
            <input
              type="text"
              className="content"
              placeholder="Thêm công việc mới"
            />
            <button
              className="btn-add-todo"
              onClick={(e) => {
                e.preventDefault();
                const inputEl = e.target.previousElementSibling;
                const todo = e.target.previousElementSibling.value;
                if (!todo.length) {
                  notifyError("Nội dung công việc chứa ít nhất 1 ký tự");
                } else {
                  this.handleAddTodo(todo);
                  inputEl.value = "";
                  notifySuccess("Thêm todo thành công");
                }
              }}
            >
              Thêm mới
            </button>
            <button
              className="btn-search"
              onClick={(e) => {
                e.preventDefault();
                this.state.onChangeSearch();
              }}
            >
              Search
            </button>
          </form>
          <div className="todo-list">
            {this.state.todoList.length === 0 ? (
              <NoneTodo />
            ) : (
              <TodoItem
                todoList={this.state.todoList}
                onLogout={this.handleLogout}
              />
            )}
          </div>
        </div>
        <ToastBox />
      </div>
    );
  }
}

export default AddTodo;
