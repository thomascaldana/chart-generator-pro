import React from "react";

const LogoutButton = ({ onLogout }) => {
  const handleLogout = () => {
    // Implemente a lógica de logout aqui, por exemplo, removendo dados do localStorage
    // localStorage.removeItem("stytch_sdk_state_public-token-test-3f407f39-b779-440c-a64c-18d260212048");

    // Chame a função onLogout passada como prop
    onLogout();
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;