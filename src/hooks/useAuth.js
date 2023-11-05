import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem(import.meta.env.VITE_STYTCH_TOKEN_AUTH);
    setIsLoggedIn(userData !== null && userData !== "null");
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem(import.meta.env.VITE_STYTCH_TOKEN_AUTH);
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
    const userData = localStorage.getItem(import.meta.env.VITE_STYTCH_TOKEN_AUTH);
    if (userData !== null) {

      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);


  return {
    isLoggedIn,
  };
};
