import React from "react";

const InputForm = ({
  answerTyped,
  GuessWordSubmitHandler,
  submitAnswerHandler,
  gameWin,
  gameOver,
  NextWordHandler,
}) => {
  return (
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
  );
};

export default InputForm;
