import { client } from "../configs/client";
import "../assets/css/home.css";
import {
  notifySuccess,
  notifyError,
  ToastBox,
} from "../Extension/jsx/Toastify";
import React, { useEffect, Component } from "react";
import NoneTodo from "../components/NoneTodo";
import TodoItem from "../components/TodoItem";
import { loading } from "../main";
import { useState } from "react";

export default function SearchTodo({ onChangeAdd, onHandleLogged }) {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      loading.style.display = "flex";
      const { data, response } = await client.get("/todos");
      loading.style.display = "";
      if (response.ok) {
        setTodoList(data.data.listTodo);
        notifySuccess("Chuyển qua chế độ tìm kiếm thành công");
      }
    }
    fetchData();
  }, []);
  const handleLogout = () => {
    client.token = null;
    loading.style.display = "flex";
    localStorage.removeItem("apiKey");
    localStorage.removeItem("userEmail");
    onHandleLogged();
  };

  const handleSearch = async (value) => {
    loading.style.display = "flex";
    const { data, response } = await client.get(`/todos?q=${value}`);
    loading.style.display = "";
    if (response.ok) {
      setTodoList(data.data.listTodo);
    }
  };

  let timerId;
  const debounce = (value) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      handleSearch(value);
      timerId = null;
    }, 300);
  };
  console.log("re-render");
  return (
    <div className="container">
      <div className="todo-app">
        <h1 className="todo-heading">Welcome to Todo App!</h1>
        <form className="add-todo">
          <input
            type="text"
            className="content"
            placeholder="Tìm kiếm công việc"
            onInput={(e) => {
              debounce(e.target.value);
            }}
          />
          <button
            className="btn-add-todo"
            onClick={(e) => {
              e.preventDefault();
              onChangeAdd();
            }}
          >
            Thêm mới
          </button>
          <button
            className="btn-search"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Search
          </button>
        </form>
        <div className="todo-list">
          {todoList.length === 0 ? (
            <NoneTodo />
          ) : (
            <TodoItem todoList={todoList} onLogout={handleLogout} />
          )}
        </div>
      </div>
      <ToastBox />
    </div>
  );
}
