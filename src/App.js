import "./App.css";
import { useState } from "react";

function App() {

  // Random words array
  const wordArray = ["lion", "tiger", "wolf", "dinosaur"];
  // Map number of index of array
  const arrayIndexArray = wordArray.map((_, index) => index);
  // arrayIndex to map as "Word To Guess"
  const [arrayIndex, setArrayIndex] = useState(0);

  // Random index generator
  const randomArrayIndexHandler = () => {
    setArrayIndex(
      arrayIndexArray[Math.floor(Math.random() * arrayIndexArray.length)]
    );
  };

  // Submit Answer
  const [AnswerSubmitted, setAnswerSubmitted] = useState("");
  const GuessWordSubmitHandler = (event) => {
    const inputValue = event.target.value;
    setAnswerSubmitted(inputValue);
    AnswerSubmitted(""); // set value in input to empty again
  };

  // Attemts - Total, Left, Counter
  const attemptsTotal = 3;
  const [attemptsLeft, setAttemptsLeft] = useState(attemptsTotal);
  const attemptsHandler = () => {
    attemptsLeft !== 0 && setAttemptsLeft(attemptsLeft - 1);
  };

  return (
    <div className="bg-gradient-to-b from-stone-100 to-stone-500 min-h-[100vh]">

      {/* App Description */}
      <div className="pt-5 pb-2 flex flex-col text-center mx-[20%] mb-[2rem]">
        <h1 className="text-3xl font-bold">P18-Hangman</h1>
        <h6 className="text-xs">
          implement a hangman game in React where users will guess a hidden word
          within a set of attempts. The user is shown a “You won” or “Game Over”
          message based on whether the word is guessed within the given number
          of attempts.
        </h6>
      </div>

      {/* Word to Guess */}
      <div className="flex flex-col justify-center">
        {/* Word to Guess - Text */}
        <div className="text-center"><p>word to guess</p></div>
        {/* Word to Guess - Mapped */}
        <div className="flex justify-center gap-x-2">
        {wordArray[arrayIndex].split("").map((item, index) => (
          <label
            key={index}
            className="px-[1.2rem] py-[0.7rem] bg-stone-800 text-white rounded-lg"
          >
            {item}
          </label>
        ))}
        </div>
      </div>

      {/* New word Button */}
      <div className="bg-sky-100/50 my-4 flex flex-col">
        {/* Button - New Word */}
        <div className="flex justify-center">
          <button
            onClick={randomArrayIndexHandler}
            className="bg-blue-600 text-white rounded-lg p-3"
          >
            New Word
          </button>
        </div>
        {/* Button - Text Below to show logic*/}
        <div>
          <p className="text-xs">This button changes the arrayIndex Value to a random number</p>
          <p>Array Index Value: {arrayIndex}</p>
        </div>
      </div>

      {/* Input For Guessing */}
      <div className="flex flex-col justify-center items-center bg-yellow-200/50">
        <div><input type="text" placeholder="guess the word" className="bg-stone-100 p-3 rounded-lg"></input></div>
        <div><button onClick={GuessWordSubmitHandler} className="bg-green-600 text-white p-3 rounded-lg mt-3">Submit Answer</button></div>
        <p className="bg-red-400 p-10">fix the logic!!!</p>
      </div>

      {/* Attemps Remaining */}
      <div>
        <p>Attempts Left:</p>
        <p>
          {attemptsLeft} / {attemptsTotal}
        </p>
        <button onClick={attemptsHandler}>minus attempts</button>
      </div>
    </div> // Main DIV
  );
}

export default App;
