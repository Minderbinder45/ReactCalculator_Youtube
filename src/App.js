import { useState } from "react";

const App = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    setResult(eval(calc + value).toString());
  };

  const deleteLast = () => {
    const value = calc.slice(0, -1);
    setCalc(value);
    if (value === "" || ops.includes(value.slice(-1))) {
      setResult("");
    } else {
      setResult(eval(value).toString());
    }
  };

  function calculate() {
    setCalc(eval(calc).toString());
  }

  const ops = ["+", "-", "=", "*", "/", "."];
  return (
    <div className="App">
      <div className="calculator">
        <div className="output">
          {result ? <span className="preview">({result})</span> : ""}&nbsp;
          {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="input">
          <button onClick={() => updateCalc("1")}>1</button>
          <button onClick={() => updateCalc("2")}>2</button>
          <button onClick={() => updateCalc("3")}>3</button>
          <button onClick={() => updateCalc("4")}>4</button>
          <button onClick={() => updateCalc("5")}>5</button>
          <button onClick={() => updateCalc("6")}>6</button>
          <button onClick={() => updateCalc("7")}>7</button>
          <button onClick={() => updateCalc("8")}>8</button>
          <button onClick={() => updateCalc("9")}>9</button>
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
