import React from "react";
import { useState } from "react";
import AddTodo from "./AddTodo";
import SearchTodo from "./SearchTodo";
import { Fragment } from "react";
import { notifySuccess } from "../Extension/jsx/Toastify";
let check = 0;
export default function Home({ name, onHandleLogged }) {
  // let check = 0;
  const userName = name;
  if (check === 0) {
    setTimeout(() => {
      notifySuccess(`Chào mừng ${userName} quay trở lại`);
    }, 500);
    check++;
  }
  const [mode, setMode] = useState(false);
  const handleChangeAdd = () => {
    setMode(!mode);
  };
  const handleChangeSearch = () => {
    setMode(!mode);
  };
  return (
    <Fragment>
      {mode ? (
        <SearchTodo
          onChangeAdd={handleChangeAdd}
          onHandleLogged={onHandleLogged}
        />
      ) : (
        <AddTodo
          onChangeSearch={handleChangeSearch}
          onHandleLogged={onHandleLogged}
        />
      )}
    </Fragment>
  );
}
