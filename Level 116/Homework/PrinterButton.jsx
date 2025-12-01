import React from "react";

const PrinterButton = ({ generateText }) => {
  const handleClick = () => {
    const text = generateText();
    alert(text);
  };

  return (
    <button onClick={handleClick}>
      Print Text
    </button>
  );
};

export default PrinterButton;
