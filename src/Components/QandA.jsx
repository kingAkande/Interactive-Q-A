/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const QandA = () => {


  const questandAns = [
    { text: "What are you here for ? ", answer: "to code", id: 1 },
    { text: "Who is the presido of Nigeria ? ", answer: "Sey baba", id: 2 },
    { text: "What is your name ? ", answer: "King Akande", id: 3 },
  ];



  return (
    <div className="w-[700px] mt-[100px] mx-auto flex flex-col gap-6">
      {questandAns.map((q, i) => (
        <QuestionandA
          num={i}
          text={q.text}
          answer={q.answer}
          key={q.text}

        />
      ))}
    </div>
  );
};

export default QandA;

function QuestionandA({ num, text, answer}) {

  const [isOpen, setisOpen] = useState(false);
  function handleClick() {
    setisOpen((isOpen) => !isOpen);
  }

  
  return (
    <div
      className={`shadow-lg p-5 pr-12 cursor-pointer border-t-4 border-b-4 ${
        isOpen ? "border-green-700" : "border-white"
      } grid grid-cols-[auto_1fr_auto] gap-x-6 gap-y-8 items-center`}
      onClick={handleClick}
    >
      <p
        className={`text-xl font-medium ${
          isOpen ? "text-green-700" : "text-gray-400"
        }`}
      >
        {num < 9 ? `0${num + 1}` : num}
      </p>
      <p
        className={`text-xl font-medium ${
          isOpen ? "text-green-700" : "text-gray-800"
        }`}
      >
        {text}
      </p>
      <p
        className={`text-xl font-medium ${
          isOpen ? "text-green-700" : "text-gray-800"
        }`}
      >
        {isOpen ? "-" : "+"}
      </p>
      {isOpen && (
        <div className="col-span-2 text-gray-600 pb-4 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}
