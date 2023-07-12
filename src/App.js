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
    setAnswerSubmitted("");
    setAnsweredFiveList([]); // Reset Answer List
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
      // answerFiveListHandler(answerSubmitted);
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
        setAnsweredFiveList([]);
      }
    };
    const checkIfWin = () => {
      if (answerSubmitted === wordArray[arrayIndex]) {
        setGameWin(true);
      }
    };
    const answerFiveListHandler = () => { // 5 Answered Submitted List
      submittedCounter === 1 && answerSubmitted !== "" && setAnsweredFiveList([answerSubmitted]);
      answeredFiveList.length > 0 && submittedCounter < 5 && answerSubmitted !== "" && setAnsweredFiveList(prevList => [...prevList, answerSubmitted]);
    };  

    checkIfLose();
    checkIfWin();
    answerFiveListHandler();
    // eslint-disable-next-line
  }, [submittedCounter, answerSubmitted, wordArray[arrayIndex]]);

  // App Description State Show/Hide
  const [showIntroButton, setShowIntroButton] = useState(false);
  const appIntro =
    "implement a hangman game in React where users will guess a hidden word within a set of attempts. The user is shown a “You won” or “Game Over” message based on whether the word is guessed within the given number of attempts.";
  const DisplayStateIntroHandler = () => {
    showIntroButton === false
      ? setShowIntroButton(true)
      : setShowIntroButton(false);
  };

  // App Backend State Show/Hide
  const [showBackendButton, setShowBackendButton] = useState(false);
  const DisplayStateBackendHandler = () => {
    showBackendButton === false
      ? setShowBackendButton(true)
      : setShowBackendButton(false);
  };

  // Answered 5 List Bottom
  const [answeredFiveList, setAnsweredFiveList] = useState([]);

  


  // RETURN
  return (
    <div className="min-h-[100vh] bg-gradient-to-b from-sky-200 from-10% via-indigo-500 via-30% to-emerald-500 to-90% py-[2rem]">
      {/* App Description */}
      <div className="pb-2 flex flex-col text-center mx-5 mb-[1rem]">
        <div className="bg-stone-100 rounded-xl py-3">
          <h1 className="text-xl font-bold">Project #18</h1>
          <h2 className="text-3xl font-bold italic">Pokemon Hangman 웃</h2>
        </div>
        {showIntroButton === false ? (
          <button
            onClick={DisplayStateIntroHandler}
            className="bg-indigo-500 text-white rounded-lg flex justify-center mx-[7rem] py-1 mt-5"
          >
            Show App Description
          </button>
        ) : (
          <div className="flex flex-col justify-center bg-stone-100/50 rounded-lg px-5 py-2 mt-5 mx-[4rem]">
            <button
              onClick={DisplayStateIntroHandler}
              className="bg-indigo-500 text-white rounded-lg flex justify-center mx-5 my-2"
            >
              Hide App Description
            </button>
            <p className="text-xs">{appIntro}</p>
          </div>
        )}
      </div>

      {/* Word to Guess */}
      <div className="bg-sky-100 border-4 border-black mx-5 rounded-lg py-5 flex flex-col justify-center">
        {/* Pokemon ? Picture */}
        <div className="flex justify-center pb-4">
          <img
            src={whatpokemon} alt="pokemon?"
            className="bg-gradient-to-b from-sky-200 to-sky-500 p-2 w-[200px] h-[200px] rounded-lg"
          />
        </div>
        {/* Word to Guess - Mapped */}
        <div className="flex justify-center gap-x-2">
          {wordArray[arrayIndex].split("").map((letter, index) => {
            const shouldHideLetter = lettersToHide.includes(letter);
            return (
              <label
                key={index}
                className={`px-[1rem] py-[0.5rem] bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-lg ${
                  shouldHideLetter
                    ? "opacity-50 text-opacity-10"
                    : "opacity-100 font-bold text-yellow-300"
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
        <div className="flex justify-end mx-5 my-3">
          <button
            onClick={randomArrayIndexHandler}
            className="bg-blue-600 text-white rounded-lg px-3 py-2 text-[0.5rem]"
          >
            Im a Noob
          </button>
        </div>
      </div>

      {/* SHOW Attempts Left / You Win / You Lose */}
      <div className="">
        {submittedCounter !== 5 && gameWin === false && (
          <div className="flex justify-center">
            <p className="bg-yellow-300 text-[1rem] px-[2rem] py-[0.7rem] rounded-lg">
              Attempts Left: {5 - submittedCounter}
            </p>
          </div>
        )}
        {submittedCounter === 5 && gameWin === false && (
          <div className=" flex justify-center">
            <p className="bg-red-500 text-white text-[1.5rem] px-[3rem] py-[1rem] rounded-lg">
              Game Over! 😔
            </p>
          </div>
        )}
        {gameWin === true && (
          <div className="flex justify-center">
            <p className="bg-green-500 text-white text-[1.5rem] px-[3rem] py-[1rem] rounded-lg">
              You Won! 😏
            </p>
          </div>
        )}
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
      <div className="bg-stone-100 mx-5 mt-[3rem] rounded-lg py-5 flex flex-col justify-center">
        {/* Pokemon ? Picture */}
        <div className="bg-stone-200/50 rounded-lg mx-5 p-5">
          <button className="mb-4 px-4 py-2 bg-indigo-400 text-white rounded-lg">Your Answers: </button>
          {answeredFiveList.map((item, index)=>(<p key={index}>{index+1} ) {item}</p>))}
        </div>
      </div>

      {/* GAME UI - BACKEND */}
      {showBackendButton === false ? (
          <button
            onClick={DisplayStateBackendHandler}
            className="bg-emerald-800 text-white rounded-lg flex justify-center mx-5 py-1 px-3 mt-5"
          >
            Show Game Backend
          </button>
        ) : (
          <div className="flex flex-col justify-center bg-stone-100/50 rounded-lg px-5 py-4 mt-5 mx-[4rem]">
            <button
              onClick={DisplayStateBackendHandler}
              className="bg-emerald-800 text-white rounded-lg flex justify-center my-2 py-1 px-3"
            >
              Hide Game Backend
            </button>
            <div className="py-5 text-center bg-yellow-200/80 mb-3 mt-4 rounded-lg">
              <p className="font-bold text-lg italic">Game Backend - Under The Hood</p>
              <p className="py-3">-----------------------------</p>
              <div className="text-xs text-start mx-5">
                <p>arrayIndex: {arrayIndex}</p>
                <p>answerTyped: {answerTyped}</p>
                <p>answerSubmitted: {answerSubmitted}</p>
                <p>wordArray[arrayIndex]: {wordArray[arrayIndex]} </p>
                <p>gameOver.toString(): {gameOver.toString()} </p>
                <p>gameWin.toString(): {gameWin.toString()} </p>
                <p>submittedCounter: {submittedCounter} </p>
              </div>
            </div>
          </div>
        )}
      


    </div> // Main DIV
  );
}

export default App;
