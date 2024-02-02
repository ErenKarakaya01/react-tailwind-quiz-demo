import React, { useContext, useState, useEffect } from "react";
import { QuestionType } from "../../../data/data";
import Question from "./Question";
import Stepper from "../../../components/ui/Stepper";
import Step from "../../../components/ui/Step";
import Timer from "../../../components/ui/Timer";
import { getQuestions } from "../../../data/data";
import wrapPromise from "../../../utils/wrapPromise";
import AnswersContext from "../context/AnswersContext";
import Score from "./Score";
import StepChip from "./StepChip";

const questionsPromise = wrapPromise<QuestionType[]>(getQuestions());

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(3);
  const { addAnswer, countCorrectAnswers } = useContext(AnswersContext);

  // fetch data
  const questions = questionsPromise.read();

  useEffect(() => {
    // check if there are any answers in local storage
    const answers = localStorage.getItem("answers");
    if (answers) {
      setCurrentQuestion(JSON.parse(answers).length);
    }
  }, []);

  const nextQuestion = () => {
    if (!isQuizCompleted()) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSeconds(3);
      }, 1000);
    }
  };

  const handleTimeRunsOut = () => {
    addAnswer({ questionId: questions[currentQuestion].id, answerId: null });
    nextQuestion();
  };

  const isQuizCompleted = () => {
    return currentQuestion === questions.length;
  };

  return (
    <div className="shadow-md backdrop-blur-sm rounded-md m-4 p-10 max-w-screen-sm w-[32rem] overflow-hidden">
      {/* display the score component if the quiz is completed */}
      {isQuizCompleted() ? (
        <Score
          correctAnswers={countCorrectAnswers()}
          totalQuestions={questions.length}
        />
      ) : (
        <React.Fragment>
          <Timer
            seconds={seconds}
            setSeconds={setSeconds}
            callback={handleTimeRunsOut}
          />

          <Stepper>
            {questions.map((question, index) => (
              <Step key={question.id}>
                <StepChip index={index} currentQuestion={currentQuestion} />
              </Step>
            ))}
          </Stepper>

          <Question
            key={questions[currentQuestion].id}
            question={questions[currentQuestion]}
            nextQuestion={nextQuestion}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default Quiz;
