import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Loading from "./helper/Loading";
import { Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }
  return <Fragment>{isAuthenticated ? <Home /> : <Login />}</Fragment>;
}
