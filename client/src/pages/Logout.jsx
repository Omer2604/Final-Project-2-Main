import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { logout, getCurrentUser } from "../services/userService";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    logout();
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      const autoLogout = setTimeout(() => {
        handleLogout();
      }, 1 * 60 * 1000); // 1 minute in milliseconds

      return () => {
        clearTimeout(autoLogout);
      };
    } else {
      navigate("/");
    }
  }, [handleLogout, navigate]);

  return (
    <div>
      <h1>Logout Page</h1>
      <p>Thank you for logging out!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
