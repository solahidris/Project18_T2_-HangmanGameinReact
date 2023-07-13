import React, { useState } from "react";

const AppDescription = () => {
  const appIntro =
    "implement a hangman game in React where users will guess a hidden word within a set of attempts. The user is shown a “You won” or “Game Over” message based on whether the word is guessed within the given number of attempts.";
  const [showIntroButton, setShowIntroButton] = useState(false);

  const DisplayStateIntroHandler = () => {
    setShowIntroButton((prevState) => !prevState);
  };

  return (
    <div className="pb-2 flex flex-col text-center mx-5 mb-[1rem]">
      <div className="bg-stone-100 rounded-xl py-3">
        <h1 className="text-xl font-bold">Project #18</h1>
        <h2 className="text-3xl font-bold italic">Pokemon Hangman 웃</h2>
      </div>
      {showIntroButton === false ? (
        <button
          onClick={DisplayStateIntroHandler}
          className="bg-indigo-500 text-white text-xs rounded-lg flex justify-center mx-[7rem] py-1 mt-5"
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
  );
};

export default AppDescription;
