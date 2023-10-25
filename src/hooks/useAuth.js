import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("stytch_sdk_state_public-token-test-3f407f39-b779-440c-a64c-18d260212048");
    setIsLoggedIn(userData !== null && userData !== "null");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("stytch_sdk_state_public-token-test-3f407f39-b779-440c-a64c-18d260212048");
    setIsLoggedIn(false);
  };

  return {
    isLoggedIn,
    handleLogout
  };
};
export const useAuth2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("stytch_sdk_state_public-token-test-3f407f39-b779-440c-a64c-18d260212048");
    setIsLoggedIn(userData !== null && userData !== "null");
  }, []);


  return {
    isLoggedIn,
  };
};
