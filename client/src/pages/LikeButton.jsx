import React, { useState, useEffect } from "react";

const ToggleButton = ({ isAuthenticated }) => {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const storedState = localStorage.getItem("toggleButtonState");
    if (storedState) {
      setIsToggled(JSON.parse(storedState));
    }
  }, []);

  const handleToggle = () => {
    if (isAuthenticated) {
      const newToggleState = !isToggled;
      setIsToggled(newToggleState);

      localStorage.setItem("toggleButtonState", JSON.stringify(newToggleState));
    } else {
      console.log(
        "Unauthorized access. Only logged-in users can click the button."
      );
    }
  };

  const buttonStyle = {
    padding: "8px 16px",
    borderRadius: "4px",
    backgroundColor: isToggled ? "#FF5233" : "#335EFF",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    marginLeft: "515px",
    marginTop: "10px",
  };

  return (
    <button onClick={handleToggle} style={buttonStyle}>
      {isToggled ? "Unlike" : "Like"}
    </button>
  );
};

export default ToggleButton;
