import React from "react";
import Header from "./Header";
import { Outlet, useOutlet } from "react-router-dom";
import Welcome from "../pages/Home/components/Welcome/Welcome";

function DefaultLayout() {
  const outlet = useOutlet();
  return (
    <div>
      <Header />
      {console.log(outlet)}
      {!outlet && <Welcome />}
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
