import "./App.css";
import whatpokemon from "./assets/whatpokemon.png";
import { useEffect, useState } from "react";

function App() {
  // Random words array
  const wordArray = [
    "pikachu",
    "charizard",
    "mewtwo",
    "bulbasaur",
    "squirtle",
    "charmander",
    "jigglypuff",
    "eevee",
    "gyarados",
    "dragonite",
    "snorlax",
    "mew",
    "articuno",
    "zapdos",
    "moltres",
    "raichu",
    "arcanine",
    "lugia",
  ];
  // Map number of index of array
  const arrayIndexArray = wordArray.map((_, index) => index);
  // arrayIndex to map as "Word To Guess"
  const [arrayIndex, setArrayIndex] = useState(0);
  const lettersToHide = ["o", "e", "i", "a", "u"]; // Letters to hide

  // Random index generator
  const randomArrayIndexHandler = () => {
    let newIndex;
    do {
      newIndex =
        arrayIndexArray[Math.floor(Math.random() * arrayIndexArray.length)];
    } while (newIndex === arrayIndex); // Make sure not same as previous value

    setArrayIndex(newIndex);
  };

  // Next word - Random index generator (After Win Game)
  const NextWordHandler = () => {
    let newIndex;
    do {
      newIndex =
        arrayIndexArray[Math.floor(Math.random() * arrayIndexArray.length)];
    } while (newIndex === arrayIndex); // Make sure not same as previous value

    setArrayIndex(newIndex);
    setGameWin(false); // Reset Game not Win
    setGameOver(false); // Reset Game not Lose
    setSubmmittedCounter(0); // Reset Counter
  };

  // Type Input Answer
  const [answerTyped, setAnswerTyped] = useState("");
  const GuessWordSubmitHandler = (event) => {
    const inputValue = event.target.value; // turn into const
    setAnswerTyped(inputValue); // set answerTyped
  };
  // Submit Answer
  const [answerSubmitted, setAnswerSubmitted] = useState("");
  const [submittedCounter, setSubmmittedCounter] = useState(0);
  const submitAnswerHandler = (event) => {
    if (answerTyped === "") {
      event.preventDefault(); // Prevents the default behavior of the button
    } else {
      setAnswerSubmitted(answerTyped); // Answer Submitted to Compare with Hangman
      setAnswerTyped(""); // Clear Input Box
      if (submittedCounter < 5) {
        // Attempts Tried Counter and limit at 5
        setSubmmittedCounter(submittedCounter + 1);
      }
    }
  };

  // Game State
  const [gameOver, setGameOver] = useState(false);
  const [gameWin, setGameWin] = useState(false);

  // Immediately Reflect Game State
  useEffect(() => {
    const checkIfLose = () => {
      if (submittedCounter === 5) {
        setGameOver(true);
      }
    };
    const checkIfWin = () => {
      if (answerSubmitted === wordArray[arrayIndex]) {
        setGameWin(true);
      }
    };

    checkIfLose();
    checkIfWin();
    // eslint-disable-next-line
  }, [submittedCounter, answerSubmitted, wordArray[arrayIndex]]);

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
      <div className="bg-stone-100 mx-5 rounded-lg py-5 flex flex-col justify-center">
        {/* Pokemon ? Picture */}
        <div className="flex justify-center pb-4">
          <img src={whatpokemon} className="bg-stone-200 p-2 w-[200px] h-[200px] rounded-lg" />
        </div>
        {/* Word to Guess - Mapped */}
        <div className="flex justify-center gap-x-2">
          {wordArray[arrayIndex].split("").map((letter, index) => {
            const shouldHideLetter = lettersToHide.includes(letter);
            return (
              <label
                key={index}
                className={`px-[1rem] py-[0.5rem] bg-stone-700 text-white rounded-lg ${
                  shouldHideLetter
                    ? "opacity-50 text-opacity-10"
                    : "opacity-100"
                }`}
              >
                {shouldHideLetter ? "?" : letter}
              </label>
            );
          })}
        </div>
        {/* Word to Guess - Text */}
        <div className="text-center font-bold text-sm pt-4">
          <p>Who's That Pokémon?</p>
        </div>
      </div>

      {/* New word Button */}
      {/* Button - New Word */}
      <div className="flex flex-col">
        <div className="flex justify-end mx-3 my-3">
          <button onClick={randomArrayIndexHandler}className="bg-blue-600 text-white rounded-lg px-3 py-2 text-[0.5rem]">
            Im a Noob
          </button>
        </div>
      </div>

      {/* SHOW Attempts Left / You Win / You Lose */}
      <div className="">
        {submittedCounter !== 5 && gameWin === false && (
          <div className="flex justify-center">
            <p className="bg-yellow-200/90 text-[1rem] px-[2rem] py-[0.7rem] rounded-lg">
              Attempts Left: {5 - submittedCounter}
            </p>
          </div>
        )}
        {submittedCounter === 5 && gameWin === false && (
          <div className=" flex justify-center"><p className="bg-red-500 text-white text-[1.5rem] px-[3rem] py-[1rem] rounded-lg">Game Over! 😔</p></div>
        )}
        {gameWin === true && <div className="flex justify-center"><p className="bg-green-500 text-white text-[1.5rem] px-[3rem] py-[1rem] rounded-lg">You Won! 😏</p></div>}
      </div>

      {/* Input For Guessing */}
      <div className="flex flex-col justify-center items-center pt-[3rem]">
        <div>
          <input
            type="text"
            placeholder="guess the word"
            value={answerTyped}
            onChange={GuessWordSubmitHandler}
            className="bg-stone-100 p-3 rounded-lg mb-3"
          ></input>
        </div>

        {/* Button To Display - Submit / Next */}
        <div>
          {gameWin === false && gameOver === false && (
            <button
              onClick={submitAnswerHandler}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Submit Answer
            </button>
          )}
          {gameWin === false && gameOver === true && (
            <button
              onClick={NextWordHandler}
              className="bg-amber-600 text-white px-5 py-2 rounded-lg"
            >
              Try Again?
            </button>
          )}
          {gameWin === true && (
            <button
              onClick={NextWordHandler}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Next Hangman
            </button>
          )}
        </div>
      </div>

      {/* Your Answer vs Guessing Word */}
      <div className="bg-stone-100 mx-5 rounded-lg py-5 flex flex-col justify-center">
        {/* Pokemon ? Picture */}
        <div className="bg-stone-200 mx-5 p-5">
          <p className="">Your Answer: {answerSubmitted}</p>
          <p className="">Make a list of 5 tries: {answerSubmitted}</p>
          <p className="">make list turn red if answer wrong, green right {answerSubmitted}</p>
        </div>
      </div>

      {/* GAME UI - BACKEND */}
      <div className="py-5 text-center">
        <p>Game Backend - Under The Hood</p>
        <p>-----------------------------</p>
        <p>MAKE_GAME_LOGIC_UI_Array Index Value: {arrayIndex}</p>
        <p>-----------------------------</p>
        <p>MAKE_GAME_LOGIC_UI_answerTyped: {answerTyped}</p>
        <p>MAKE_GAME_LOGIC_UI_answerSubmitted: {answerSubmitted}</p>
        <p>-----------------------------</p>
        <p>MAKE_GAME_LOGIC_UI_Question Answer: {wordArray[arrayIndex]} </p>
        <p>MAKE_GAME_LOGIC_UI_gameOver State: {gameOver.toString()} </p>
        <p>MAKE_GAME_LOGIC_UI_gameWin State: {gameWin.toString()} </p>
        <p>MAKE_GAME_LOGIC_UI_submittedCounter: {submittedCounter} </p>
      </div>
    </div> // Main DIV
  );
}

export default App;
