import { Suspense, useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import AnswersContext, { AnswerType } from "./context/AnswersContext";
import LoadingSpinner from "../../components/ui/LoadingSpinner";

const QuizPage = () => {
  const [answers, setAnswers] = useState<AnswerType[]>([]);

  useEffect(() => {
    const answers = localStorage.getItem("answers");
    if (answers) {
      setAnswers(JSON.parse(answers));
      console.log(JSON.parse(answers));
    }
  }, []);

  const addAnswer = (answer: AnswerType) => {
    if (isAnswered(answer.questionId)) return;

    setAnswers([...answers, answer]);
    localStorage.setItem("answers", JSON.stringify([...answers, answer]));
    console.log([...answers, answer]);
  };

  const countCorrectAnswers = () => {
    return answers.filter((answer) => answer.isCorrect).length;
  };

  const isAnswered = (questionId: number) => {
    return answers.some((answer) => answer.questionId === questionId);
  };

  return (
    <AnswersContext.Provider
      value={{ answers, addAnswer, isAnswered, countCorrectAnswers }}
    >
      <div className="flex justify-center items-center h-screen">
        <Suspense fallback={<LoadingSpinner />}>
          <Quiz />
        </Suspense>
      </div>
    </AnswersContext.Provider>
  );
};

export default QuizPage;
