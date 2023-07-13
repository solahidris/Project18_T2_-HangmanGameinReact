import React from "react";

const NewWordButton = ({
  randomArrayIndexHandler,
  gameWin,
  gameOver,
  NextWordHandler,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end mx-5 my-3">
        {gameWin === false && gameOver === false && (
          <button
            onClick={randomArrayIndexHandler}
            className="bg-blue-600 text-white rounded-lg px-3 py-2 text-[0.5rem]"
          >
            Im a Noob
          </button>
        )}
      </div>
    </div>
  );
};

export default NewWordButton;