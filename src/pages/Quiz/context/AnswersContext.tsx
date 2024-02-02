import { createContext } from "react";

export interface AnswerType {
  questionId: number;
  answerId: number | null;
  isCorrect?: boolean;
}

const AnswersContext = createContext<{
  answers: AnswerType[];
  addAnswer: (answer: AnswerType) => void;
  isAnswered: (questionId: number) => boolean;
  countCorrectAnswers: () => number
}>({
  answers: [],
  addAnswer: () => {},
  isAnswered: () => false,
  countCorrectAnswers: () => 0
});

export default AnswersContext;
