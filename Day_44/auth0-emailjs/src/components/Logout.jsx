import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../assets/css/logout.css";

function Logout() {
  const { logout } = useAuth0();
  return (
    <button
      className="btn-logout"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Logout
    </button>
  );
}

export default Logout;
