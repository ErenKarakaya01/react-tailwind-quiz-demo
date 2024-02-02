import React, { useState, useContext } from "react";
import AnswersContext from "../context/AnswersContext";
import { OptionType } from "../../../data/data";

interface OptionProps {
  questionId: number;
  option: OptionType;
  nextQuestion: () => void;
}

const Option = ({ questionId, option, nextQuestion }: OptionProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const { addAnswer, isAnswered } = useContext(AnswersContext);

  const handleClick = () => {
    if (isClicked || isAnswered(questionId)) return;

    setIsClicked(true);

    addAnswer({
      questionId: questionId,
      answerId: option.id,
      isCorrect: option.isCorrect,
    });
    nextQuestion();
  };

  return (
    <button
      className={`px-10 py-4 my-2 w-full border-2 border-gray-500 rounded-md hover:scale-110 transition ease-in-out 
      ${isClicked ? "animate-shake" : ""}
      ${isClicked && option.isCorrect ? "bg-green-500" : ""} 
      ${isClicked && !option.isCorrect ? "bg-red-500" : ""}`}
      onClick={handleClick}
    >
      {option.text}
    </button>
  );
};

export default Option;
