import React from "react";
import PrinterButton from "./PrinterButton";

const Printer = () => {

  const generateText = () => {
    let result = "";
    for (let i = 0; i < 5000; i++) {
      result += "Hello ";
    }
    return result;
  };

  return (
    <div>
      <PrinterButton generateText={generateText} />
    </div>
  );
};

export default Printer;
