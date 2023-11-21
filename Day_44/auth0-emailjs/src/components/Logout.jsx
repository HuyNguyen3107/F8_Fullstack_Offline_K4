import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { forwardRef, memo } from "react";
import "../assets/css/logout.css";

const Logout = memo(
  forwardRef(function Logout(props, ref) {
    // console.log("re-render");
    const { logout } = useAuth0();
    return (
      <button
        ref={ref}
        className="btn-logout"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Logout
      </button>
    );
  })
);

export default Logout;
