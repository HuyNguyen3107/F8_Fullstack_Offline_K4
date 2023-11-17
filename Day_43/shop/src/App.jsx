import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Fragment } from "react";
import { useState } from "react";
import { useSelector } from "./core/hook";

export default function App() {
  const isLogin = useSelector((state) => state.isLogin);
  return (
    <Fragment>
      {isLogin || localStorage.getItem("apiKey") ? <Home /> : <Login />}
    </Fragment>
  );
}
