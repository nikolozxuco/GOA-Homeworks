import { useState } from "react";
import CounterButton from "./CounterButton";

export default function App() {

  const [counter, setCounter] = useState(0);

  function addOne() {
    const newValue = counter + 1;
    setCounter(newValue);
    alert("მიმდინარე მნიშვნელობა: " + newValue);
  }

  return (
    <div>
      <CounterButton onIncrement={addOne} />
    </div>
  );
}
