import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Logout from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";
import "../assets/css/form.css";
import { notifySuccess, ToastBox, notifyError } from "../helper/toastify";
import Loading from "../helper/Loading";

function AskForm() {
  const { user } = useAuth0();

  const [isLoading, setLoading] = useState(false);
  const form = useRef();
  const msgRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const logoutRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      emailRef.current.value &&
      nameRef.current.value &&
      msgRef.current.value
    ) {
      setLoading(true);
      emailjs
        .sendForm(
          "service_m71ysug",
          "template_5ufe84f",
          form.current,
          "SiFGsIAwnytX5LwCC"
        )
        .then(
          (result) => {
            setLoading(false);
            console.log(result.text);
            notifySuccess("Gửi Email thành công <3");
            msgRef.current.value = "";
          },
          (error) => {
            setLoading(false);
            notifyError("Gửi Email không thành công. Vui lòng đăng nhập lại");
            setTimeout(() => {
              logoutRef.current.click();
            }, 5000);
            console.log(error.text);
          }
        );
    } else {
      notifyError("Vui lòng nhập đủ các trường ");
    }
  };
  return (
    <div className="container">
      <div className="ask-form">
        <div className="avatar">
          <img src={user.picture} alt="" />
        </div>
        <div className="user-info">
          <h3>Have a nice day {user.name}!</h3>
          <span className="locate">
            {user.locale ? <span>Locale: {user.locale}</span> : ""}
          </span>
          <div className="email-user">
            {user.email ? (
              <a href={`mailto: ${user.email}`}>Email: {user.email}</a>
            ) : (
              ""
            )}
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name..."
              ref={nameRef}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email..."
              ref={emailRef}
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Enter your message..."
              ref={msgRef}
            />
          </div>
          <input type="submit" value="Send" className="btn-sendMsg" />
        </form>
      </div>
      <Logout ref={logoutRef} />
      <ToastBox />
      <Loading isLoading={isLoading} />
    </div>
  );
}

export default AskForm;
