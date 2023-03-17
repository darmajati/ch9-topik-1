import React, { useState } from 'react';

function Calculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNumber1Change = (event) => {
    setNumber1(Number(event.target.value));
  };

  const handleNumber2Change = (event) => {
    setNumber2(Number(event.target.value));
  };

  const handleAddition = () => {
    setResult(number1 + number2);
  };

  const handleSubtraction = () => {
    setResult(number1 - number2);
  };

  const handleMultiplication = () => {
    setResult(number1 * number2);
  };

  const handleDivision = () => {
    setResult(number1 / number2);
  };

  return (
    <div>
      <label>
        Angka pertama:
        <input type="number" value={number1} onChange={handleNumber1Change} />
      </label>
      <br />
      <label>
        Angka kedua:
        <input type="number" value={number2} onChange={handleNumber2Change} />
      </label>
      <br />
      <button className="btn btn-primary" onClick={handleAddition}>+</button>
      <button className="btn btn-primary" onClick={handleSubtraction}>-</button>
      <button className="btn btn-primary" onClick={handleMultiplication}>*</button>
      <button className="btn btn-primary" onClick={handleDivision}>/</button>
      <br />
      <div className="card">
        <div className="card-body text-black" >Hasil: {result}</div>
      </div>
    </div>
  );
}

export default Calculator;