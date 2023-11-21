import React from "react";
import "../assets/css/login.css";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithPopup } = useAuth0();
  return (
    <div className="login-form">
      <h1 className="login-heading">Welcome to F9</h1>
      <span>Thank you for using F8's services</span>
      <p className="login-desc">
        If you have any questions or help, log in and ask here!
      </p>
      <button className="btn-login" onClick={() => loginWithPopup()}>
        Login || Register
      </button>
    </div>
  );
}

export default Login;
