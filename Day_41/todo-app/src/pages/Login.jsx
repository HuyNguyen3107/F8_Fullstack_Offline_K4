import { client } from "../configs/client";
import { regexEmail } from "../Extension/regex";
import "../assets/css/login.css";
import { notifyError, ToastBox } from "../Extension/jsx/Toastify";
import React, { Component } from "react";
import { loading } from "../main";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onHandleLogged: props.onHandleLogged,
    };
  }
  handleLogin = async (e) => {
    e.preventDefault();
    const emailEl = e.target.previousElementSibling;
    const email = emailEl.value;
    if (regexEmail(email)) {
      loading.style.display = "flex";
      const { data, response } = await client.get(`/api-key?email=${email}`);
      loading.style.display = "";
      if (response.ok) {
        const { apiKey } = data.data;
        let userName = email;
        userName = userName.slice(0, userName.indexOf("@"));
        localStorage.setItem("apiKey", apiKey);
        localStorage.setItem("userEmail", email);
        this.state.onHandleLogged(userName);
      } else {
        notifyError("Email không tồn tại");
        emailEl.value = "";
      }
    } else {
      notifyError("Email không hợp lệ");
      emailEl.value = "";
    }
  };
  render() {
    return (
      <div className="login-form">
        <h1 className="login-heading">Welcome to Todo App</h1>
        <h2 className="login-title">Please enter email to login!</h2>
        <form action="">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter your email" id="email" />
          <button className="btn-login" onClick={this.handleLogin}>
            Login
          </button>
        </form>
        <ToastBox />
      </div>
    );
  }
}

export default Login;
