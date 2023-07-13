import React, { useEffect, useState } from "react";
import "./App.css";
import WordToGuess from "./components/WordToGuess";
import NewWordButton from "./components/NewWordButton";
import GameState from "./components/GameState";
import InputForm from "./components/InputForm";
import AnswerList from "./components/AnswerList";
import AppDescription from "./components/AppDescription";
import GameBackend from "./components/GameBackend";

// PR for JAKZ
// Getting Ready to be roasted haha

function App() {
  // Random words array
  // eslint-disable-next-line
  const wordArray = [
    "Pikachu",
    "Charizard",
    "Mewtwo",
    "Bulbasaur",
    "Squirtle",
    "Charmander",
    "Jigglypuff",
    "Eevee",
    "Gyarados",
    "Dragonite",
    "Snorlax",
    "Mew",
    "Articuno",
    "Zapdos",
    "Moltres",
    "Raichu",
    "Arcanine",
    "Lugia",
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
    } while (newIndex === arrayIndex); // Make sure not the same as the previous value

    setArrayIndex(newIndex);
  };

  // Next word - Random index generator (After Win Game)
  const NextWordHandler = () => {
    let newIndex;
    do {
      newIndex =
        arrayIndexArray[Math.floor(Math.random() * arrayIndexArray.length)];
    } while (newIndex === arrayIndex); // Make sure not the same as the previous value

    setArrayIndex(newIndex);
    setGameWin(false); // Reset Game not Win
    setGameOver(false); // Reset Game not Lose
    setSubmittedCounter(0); // Reset Counter
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
  const [submittedCounter, setSubmittedCounter] = useState(0);
  // const submitAnswerHandler = (event) => {
  //   if (answerTyped === "") {
  //     event.preventDefault(); // Prevents the default behavior of the button
  //   } else {
  //     setAnswerSubmitted(answerTyped); // Answer Submitted to Compare with Hangman
  //     setAnswerTyped(""); // Clear Input Box
  //     if (submittedCounter < 5) {
  //       // Attempts Tried Counter and limit at 5
  //       setSubmittedCounter(submittedCounter + 1);
  //     }
  //   }
  // };
  const submitAnswerHandler = (event) => {
    if (answerTyped === "") {
      event.preventDefault(); // Prevents the default behavior of the button
    } else {
      setAnswerSubmitted(answerTyped); // Answer Submitted to Compare with Hangman
      setAnswerTyped(""); // Clear Input Box
      if (submittedCounter < 5) {
        // Attempts Tried Counter and limit at 5
        setSubmittedCounter(submittedCounter + 1);
      }
  
      // Update answeredFiveList state with the new answer
      setAnsweredFiveList((prevAnsweredFiveList) => [...prevAnsweredFiveList, answerTyped]);
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

    checkIfLose();
    checkIfWin();
  }, [submittedCounter, answerSubmitted, wordArray, arrayIndex]);

  // App Description State Show/Hide
  const [showIntroButton, setShowIntroButton] = useState(false);
  const appIntro =
    "implement a hangman game in React where users will guess a hidden word within a set of attempts. The user is shown a 'You won' or 'Game Over' message based on whether the word is guessed within the given number of attempts.";

  const DisplayStateIntroHandler = () => {
    setShowIntroButton((prevState) => !prevState);
  };

  // App Backend State Show/Hide
  const [showBackendButton, setShowBackendButton] = useState(false);
  const DisplayStateBackendHandler = () => {
    setShowBackendButton((prevState) => !prevState);
  };

  // Answered 5 List Bottom
  const [answeredFiveList, setAnsweredFiveList] = useState([]);

  return (
    <div className="min-h-[100vh] bg-gradient-to-b from-sky-200 from-10% via-indigo-500 via-30% to-emerald-500 to-90% py-[2rem]">
      <AppDescription
        showIntroButton={showIntroButton}
        appIntro={appIntro}
        DisplayStateIntroHandler={DisplayStateIntroHandler}
      />
      <WordToGuess
        wordArray={wordArray}
        arrayIndex={arrayIndex}
        lettersToHide={lettersToHide}
      />
      <NewWordButton
        randomArrayIndexHandler={randomArrayIndexHandler}
        gameWin={gameWin}
        gameOver={gameOver}
        NextWordHandler={NextWordHandler}
      />
      <GameState
        submittedCounter={submittedCounter}
        gameWin={gameWin}
        gameOver={gameOver}
      />
      <InputForm
        answerTyped={answerTyped}
        GuessWordSubmitHandler={GuessWordSubmitHandler}
        submitAnswerHandler={submitAnswerHandler}
        gameWin={gameWin}
        gameOver={gameOver}
        NextWordHandler={NextWordHandler}
      />
      <AnswerList answeredFiveList={answeredFiveList} />
      <GameBackend
        showBackendButton={showBackendButton}
        DisplayStateBackendHandler={DisplayStateBackendHandler}
        arrayIndex={arrayIndex}
        answerTyped={answerTyped}
        answerSubmitted={answerSubmitted}
        gameWin={gameWin}
        gameOver={gameOver}
        submittedCounter={submittedCounter}
        wordArray={wordArray}
      />
    </div>
  );
}

export default App;