import React from "react";

const GameBackend = ({
  showBackendButton,
  DisplayStateBackendHandler,
  arrayIndex,
  answerTyped,
  answerSubmitted,
  gameWin,
  gameOver,
  submittedCounter,
  wordArray,
}) => {
  return (
    <div className="flex flex-col justify-center bg-stone-100/50 rounded-lg px-5 py-4 mt-5 mx-[4rem]">
      <button
        onClick={DisplayStateBackendHandler}
        className="bg-emerald-800 text-white rounded-lg flex justify-center my-2 py-1 px-3"
      >
        {showBackendButton ? "Hide Game Backend" : "Show Game Backend"}
      </button>
      {showBackendButton && (
        <div className="py-5 text-center bg-green-100/80 mb-3 mt-4 rounded-lg">
          <p className="font-bold text-base">
            Game Backend - Under The Hood
          </p>
          <p className="py-1">-----------------------------</p>
          <div className="text-xs text-start mx-5">
            <p>arrayIndex: {arrayIndex}</p>
            <p>answerTyped: {answerTyped}</p>
            <p>answerSubmitted: {answerSubmitted}</p>
            <p>wordArray[arrayIndex]: {wordArray[arrayIndex]}</p>
            <p>gameOver.toString(): {gameOver.toString()}</p>
            <p>gameWin.toString(): {gameWin.toString()}</p>
            <p>submittedCounter: {submittedCounter}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameBackend;
