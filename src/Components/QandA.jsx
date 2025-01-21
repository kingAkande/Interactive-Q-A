/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const QandA = () => {


  const CurrentAffairs =[
    {
      "question": "Who is the current Secretary-General of the United Nations?",
      "answer": "António Guterres"
    },
    {
      "question": "Which country hosted the 2024 Summer Olympics?",
      "answer": "Paris, France"
    },
    {
      "question": "What is the name of the latest Mars rover launched by NASA?",
      "answer": "Perseverance"
    },
    {
      "question": "Who is the current President of the United States?",
      "answer": "Joe Biden"
    },
    {
      "question": "Which country became the 31st member of NATO in 2023?",
      "answer": "Finland"
    },
    {
      "question": "What is the largest trade agreement currently in effect?",
      "answer": "The Regional Comprehensive Economic Partnership (RCEP)"
    },
    {
      "question": "Who is the first African woman to win a Nobel Prize in Literature?",
      "answer": "Nadine Gordimer (1991)"
    },
    {
      "question": "What is the theme for World Environment Day 2024?",
      "answer": "Beat Plastic Pollution"
    },
    {
      "question": "Which country is leading the global production of electric vehicles in 2024?",
      "answer": "China"
    },
    {
      "question": "Who is the current President of Nigeria?",
      "answer": "Bola Ahmed Tinubu"
    }
  ]
  



  return (
    <div className="w-[700px] mt-[100px] mx-auto flex flex-col gap-6">
      {CurrentAffairs.map((q, i) => (
        <QuestionandA
          num={i}
          question={q.question}
          answer={q.answer}
          key={q.question}

        />
      ))}
    </div>
  );
};

export default QandA;

function QuestionandA({ num, question, answer}) {

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
        {question}
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
