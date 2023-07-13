import React from "react";

const AnswerList = ({ answeredFiveList }) => {
  return (
    <div className="bg-stone-100 mx-5 mt-[3rem] rounded-lg py-5 flex flex-col justify-center">
      {/* Pokemon ? Picture */}
      <div className="bg-stone-200/50 rounded-lg mx-5 p-5">
        <button className="mb-4 px-4 py-2 bg-green-500 border-black text-white rounded-lg">
          Your Answers:{" "}
        </button>
        {answeredFiveList.map((item, index) => (
          <div key={index} className="py-1 bg-stone-100 my-2 rounded-lg px-3">
            <p className="tracking-widest">
              {index + 1}) {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnswerList;
