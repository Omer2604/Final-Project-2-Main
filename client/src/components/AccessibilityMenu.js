import React, { useState } from "react";
import "../css/AccessibilityMenu.css";

const AccessibilityMenu = ({ style, onToggleDarkMode, onToggleTextOnly }) => {
  const [fontSize, setFontSize] = useState(16);

  const fontFamilies = [
    { name: "Arial", text: " מעבר לפונט אריאל" },
    { name: "Times New Roman", text: "מעבר לפונט טיימס ניו רומן" },
    { name: "Verdana", text: "מעבר לפונט ורדנה " },
  ];

  const increaseLineSpacing = () => {
    const bodyStyles = getComputedStyle(document.body);
    const currentFontSize = parseFloat(bodyStyles.fontSize);
    const currentLineSpacing =
      parseFloat(bodyStyles.lineHeight) / currentFontSize;
    const newLineSpacing = currentLineSpacing + 0.2;
    document.body.style.lineHeight = `${newLineSpacing}`;
  };

  const decreaseLineSpacing = () => {
    const bodyStyles = getComputedStyle(document.body);
    const currentFontSize = parseFloat(bodyStyles.fontSize);
    const currentLineSpacing =
      parseFloat(bodyStyles.lineHeight) / currentFontSize;
    const newLineSpacing = currentLineSpacing - 0.2;
    document.body.style.lineHeight = `${newLineSpacing}`;
  };

  const increaseTextSize = () => {
    setFontSize((prevFontSize) => {
      const newFontSize = prevFontSize + 2;
      document.documentElement.style.fontSize = `${newFontSize}px`;
      return newFontSize;
    });
  };

  const decreaseTextSize = () => {
    setFontSize((prevFontSize) => {
      const newFontSize = prevFontSize - 2;
      document.documentElement.style.fontSize = `${newFontSize}px`;
      return newFontSize;
    });
  };

  const skipToMainContent = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
      mainContent.tabIndex = -1;
    }
  };

  const changeFontFamily = (fontFamily) => {
    document.body.style.fontFamily = fontFamily;
  };

  return (
    <div className="accessibility-menu" style={style}>
      <button onClick={increaseTextSize}>הגדל טקסט</button>
      <button onClick={decreaseTextSize}>הקטן טקסט</button>
      <button onClick={onToggleDarkMode}>מצב לילה</button>
      <button onClick={onToggleTextOnly}>מצב טקסט בלבד</button>
      <button onClick={skipToMainContent}>דלג לתוכן העיקרי</button>

      <div className="font-family-buttons">
        {fontFamilies.map((fontFamily) => (
          <button
            key={fontFamily.name}
            onClick={() => changeFontFamily(fontFamily.name)}
          >
            {fontFamily.text}
          </button>
        ))}
      </div>
      <button onClick={increaseLineSpacing}>הגדל רווח בין שורות</button>
      <button onClick={decreaseLineSpacing}>הקטן רווח בין שורות</button>
    </div>
  );
};

export default AccessibilityMenu;
