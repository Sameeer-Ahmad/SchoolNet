import  { useState } from "react";

const choices = ["Rock", "Paper", "Scissors"];

const RockPaperScissors = () => {
const [playerChoice, setPlayerChoice] = useState(null);
const [computerChoice, setComputerChoice] = useState(null);
const [result, setResult] = useState("");

const handlePlayerChoice = (choice) => {
    const randomChoice = choices[Math.floor(Math.random() * 3)]; 
    setPlayerChoice(choice);
    setComputerChoice(randomChoice);
    calculateResult(choice, randomChoice);
  };

const calculateResult = (player, computer) => {
    if (player === computer) {
      setResult("Draw");
    } else if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Paper" && computer === "Rock")
    ) {
      setResult("You Win!");
    } else {
      setResult("You Lose!");
    }
  };

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      <div style={{ marginBottom: "20px" }}>
        <h3>Your Choice: {playerChoice || "None"}</h3>
        <h3>Computer's Choice: {computerChoice || "None"}</h3>
      </div>

      <div>
        {choices.map((choice) => (
          <button key={choice} onClick={() => handlePlayerChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>

      {result && (
        <div
          style={{ marginTop: "20px", fontSize: "24px", fontWeight: "bold" }}
        >
          {result}
        </div>
      )}
    </div>
  );
};

export default RockPaperScissors;
