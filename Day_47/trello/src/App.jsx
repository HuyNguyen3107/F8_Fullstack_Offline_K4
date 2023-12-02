import React from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
import "../src/assets/css/App.css";
import "primeicons/primeicons.css";
import { ToastBox } from "./helper/toast";

function App() {
  const apiKey = useSelector((state) => state.trello.apiKey);
  return (
    <div>
      {apiKey ? <Home /> : <Login />} <ToastBox />
    </div>
  );
}

export default App;
