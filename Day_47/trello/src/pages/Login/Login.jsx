import React, { useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { getApiKey } from "../../redux/middlewares/trelloMiddlewares";
import { notifyWarning } from "../../helper/toast";
import Loading from "../../components/Loading/Loading";

function Login() {
  const status = useSelector((state) => state.trello.status);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const handleChange = (value) => {
    setEmail(value);
  };
  const handleSubmit = (email) => {
    if (email) {
      dispatch(getApiKey(email));
    } else {
      notifyWarning("Nhập email vào nghen!");
    }
  };
  return (
    <div className="login-form">
      <h1 className="login-heading">Welcome to TRELLO</h1>
      <h2 className="login-title">Please enter email to login!</h2>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(email);
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          id="email"
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
        <button className="btn-login">Login</button>
      </form>
      {status === "pending" ? <Loading isLoading={true} /> : ""}
    </div>
  );
}

export default Login;
