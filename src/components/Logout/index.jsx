import { Button } from './styles'
import React from "react";
import { useAuth } from "../../hooks/useAuth.js";


const LogoutButton = () => {
  const { isLoggedIn, handleLogout } = useAuth();


  return isLoggedIn ? <Button onClick={handleLogout}>Logout</Button> : null;
};

export default LogoutButton;