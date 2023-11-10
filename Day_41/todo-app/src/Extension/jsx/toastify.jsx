import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/css/toastify.css";

export const notifySuccess = (message) =>
  toast(message, {
    className: "toastify-success",
  });

export const notifyError = (message) =>
  toast(message, {
    className: "toastify-error",
  });
export const notifyPending = (message) =>
  toast(message, {
    className: "toastify-pending",
  });

export const ToastBox = ToastContainer;
