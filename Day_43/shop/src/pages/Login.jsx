import React, { useState } from "react";
import { client } from "../configs/client";
import { regexEmail } from "../helper/regex";
import "../assets/css/login.css";
import { notifyError, ToastBox } from "../helper/toastify";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "../core/hook";

export default function Login() {
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const handleEmail = (value) => {
    setEmail(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (regexEmail(email)) {
      dispatch({
        type: "loading/show",
      });
      const { response, data } = await client.get(`/api-key?email=${email}`);
      if (response.ok) {
        localStorage.setItem("apiKey", data.data.apiKey);
        localStorage.setItem("userEmail", email);
        client.setToken(data.data.apiKey);
        dispatch({
          type: "login/logged",
        });
      } else {
        dispatch({
          type: "loading/hidden",
        });
        notifyError("Email không tồn tại");
        setEmail("");
      }
    } else {
      notifyError("Email không hợp lệ");
      setEmail("");
    }
  };

  return (
    <div className="login-form">
      <h1 className="login-heading">Welcome to Huy's Shop</h1>
      <h2 className="login-title">Please enter email to login!</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          id="email"
          onChange={(e) => {
            handleEmail(e.target.value);
          }}
          value={email}
        />
        <button className="btn-login">Login</button>
      </form>
      <ToastBox />
      <Loading isLoading={isLoading} />
    </div>
  );
}
