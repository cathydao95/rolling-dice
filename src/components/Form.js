import { useState } from "react";
import Die from "./Die";

function Form() {
  const [inputNumber, setInputNumber] = useState("");
  const [diceArray, setDiceArray] = useState([]);

  function handleChange(event) {
    setInputNumber(Number(event.target.value));
  }

  function rollDice(event) {
    event.preventDefault();
    const numberOfDice = [];
    if (inputNumber < 1 || inputNumber > 99) {
      alert("Please pick a number between 1-99");
    } else {
      for (let i = 0; i < inputNumber; i++) {
        numberOfDice.push(Math.ceil(Math.random() * 6));
      }
      setDiceArray(numberOfDice);
    }
  }

  console.log(diceArray);

  const diceList = diceArray.map((num, index) => {
    return <Die key={index} num={num} />;
  });

  return (
    <div className="form-wrapper">
      <h1>Number of Dice</h1>
      <form onSubmit={rollDice}>
        <input type="number" onChange={handleChange}></input>
        <button>Roll</button>
      </form>
      <div className="dice-container"> {diceList}</div>
    </div>
  );
}

export default Form;
