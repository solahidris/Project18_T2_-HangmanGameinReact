import React from "react";
import whatpokemon from "../assets/whatpokemon.png"

const WordToGuess = ({ wordArray, arrayIndex, lettersToHide }) => {
  const wordToGuess = wordArray[arrayIndex];

  return (
    <div className="bg-sky-100 border-4 border-black mx-5 rounded-lg py-5 flex flex-col justify-center">
      {/* Pokemon ? Picture */}
      <div className="flex justify-center pb-4">
        <img
          src={whatpokemon}
          alt="pokemon?"
          className="bg-gradient-to-b from-sky-200 to-sky-500 p-2 w-[200px] h-[200px] rounded-lg"
        />
      </div>
      {/* Word to Guess - Mapped */}
      <div className="flex flex-wrap justify-center gap-x-2">
        {wordToGuess.split("").map((letter, index) => {
          const shouldHideLetter = lettersToHide.includes(letter);
          return (
            <div key={index} className="flex items-center">
              <label
                className={`px-[1rem] py-[0.5rem] bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-lg ${
                  shouldHideLetter
                    ? "opacity-50 text-opacity-10"
                    : "opacity-100 font-bold text-yellow-300"
                }`}
              >
                {shouldHideLetter ? "?" : letter}
              </label>
            </div>
          );
        })}
      </div>

      {/* Word to Guess - Text */}
      <div className="text-center font-bold text-sm pt-4">
        <p>Who's That Pokémon?</p>
      </div>
    </div>
  );
};

export default WordToGuess;
