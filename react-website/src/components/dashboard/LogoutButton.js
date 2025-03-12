// src/components/dashboard/LogoutButton.js
import React from "react";
import { useHistory } from "react-router-dom";

const LogoutButton = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Vous pouvez ici effacer le token ou les infos utilisateur
    history.push("/login"); // Redirection vers la page de login
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: "10px",
        backgroundColor: "#f44336",
        color: "#fff",
        border: "none",
        cursor: "pointer",
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
