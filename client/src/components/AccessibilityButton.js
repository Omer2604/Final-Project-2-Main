import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "../css/AccessibilityButton.css";
import AccessibilityMenu from "./AccessibilityMenu";

const AccessibilityButton = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuStyle, setMenuStyle] = useState({});

  const handleClick = () => {
    setMenuVisible((prevVisible) => !prevVisible);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  useEffect(() => {
    const buttonElement = document.querySelector(".accessibility-button");
    if (buttonElement) {
      const rect = buttonElement.getBoundingClientRect();
      setMenuStyle({
        position: "absolute",
        top: `${rect.bottom}px`,
        left: `${rect.left}px`,
      });
    }
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  };

  const toggleTextOnly = () => {
    document.body.classList.toggle("text-only");
  };

  return (
    <>
      <button
        className="accessibility-button"
        onClick={handleClick}
        onKeyPress={handleKeyPress}
        aria-label={props.ariaLabel}
        tabIndex={0}
      >
        תפריט נגישות
      </button>
      {menuVisible &&
        createPortal(
          <AccessibilityMenu
            style={menuStyle}
            onToggleDarkMode={toggleDarkMode}
            onToggleTextOnly={toggleTextOnly}
          />,
          document.body
        )}
    </>
  );
};

export default AccessibilityButton;
