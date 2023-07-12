import "./App.css";
import { useEffect, useState } from "react";

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

  // Type Input Answer
  const [answerTyped, setAnswerTyped] = useState("");
  const GuessWordSubmitHandler = (event) => {
    const inputValue = event.target.value; // turn into const
    setAnswerTyped(inputValue); // set answerTyped
  };
  // Submit Answer
  const [answerSubmitted, setAnswerSubmitted] = useState("");
  const submitAnswerHandler = () => {
    setAnswerSubmitted(answerTyped); // Answer Submitted to Compare with Hangman
    setAnswerTyped(""); // Clear Input Box
    // compareAnswer();
  };

  // Same answerSubmitted === wordArray[arrayIndex]
  // eslint-disable-next-line
  const [gameOver, setGameOver] = useState(false);
  // eslint-disable-next-line
  const [gameWin, setGameWin] = useState(false);

  // Compare Answer & Reduce Attempts Left?
  // answerSubmitted === wordArray[arrayIndex])

  // Display WIN / LOSE
  useEffect(() => {
  }, []);

  // RETURN
  // RETURN
  // RETURN
  // RETURN
  // RETURN
  // RETURN
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
        <div className="text-center">
          <p>word to guess</p>
        </div>
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
      <div className="bg-sky-100/50 my-4 flex flex-col py-5">
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
        <div className="text-center pt-4">
          <p className="text-xs">
            This button changes the arrayIndex Value to a random number
          </p>
          <p>Array Index Value: {arrayIndex}</p>
        </div>
      </div>

      {/* Input For Guessing */}
      <div className="flex flex-col justify-center items-center bg-yellow-200/50 py-5">
        <div>
          <input
            type="text"
            placeholder="guess the word"
            value={answerTyped}
            onChange={GuessWordSubmitHandler}
            className="bg-stone-100 p-3 rounded-lg mb-3"
          ></input>
        </div>
        <div>
          <button
            onClick={submitAnswerHandler}
            className="bg-green-600 text-white p-3 rounded-lg"
          >
            Submit Answer
          </button>
        </div>
        
        <p>answerTyped: {answerTyped}</p>
        <p>answerSubmitted: {answerSubmitted}</p>
      </div>

      {/* Your Answer vs Guessing Word */}
      <div className="bg-red-300/50 py-5">
        <p className="text-center">Your Answer: {answerSubmitted}</p>
        <p className="text-center">Question Answer: {wordArray[arrayIndex]} </p>
      
        <p className="text-center">----------------------</p>
      
        <p className="text-center">gameOver State: {gameOver.toString()} </p>
        <p className="text-center">gameWin State: {gameWin.toString()} </p>
      
        <p className="text-center">----------------------</p>
      
        <p className="text-center">You Won!</p>
        <p className="text-center">Game Over</p>
      </div>

      {/* Attemps Remaining */}
      <div className="py-5 text-center">
        <p>do this after gamestatus</p>
        {/* Tries Left: {attemptsLeft} / {attemptsTotal} */}
      </div>

    </div> // Main DIV
  );
}

export default App;
