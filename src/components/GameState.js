import React from "react";

const GameState = ({ submittedCounter, gameWin, gameOver }) => {
  return (
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
  );
};

export default GameState;
