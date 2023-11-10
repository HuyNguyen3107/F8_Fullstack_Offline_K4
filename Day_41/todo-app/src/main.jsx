import ReactDOM from "react-dom/client";
import App from "./App";

const root = document.querySelector("#root");
export const loading = document.querySelector(".loading");

ReactDOM.createRoot(root).render(<App />);
