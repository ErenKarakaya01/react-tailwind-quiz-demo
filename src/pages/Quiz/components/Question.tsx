import { QuestionType } from "../../../data/data";
import Option from "./Option";

interface QuestionProps {
  question: QuestionType;
  nextQuestion: () => void;
}

const Question = ({ question, nextQuestion }: QuestionProps) => {
  return (
    <div className="animate-right-to-left">
      <div className="flex flex-col items-center">
        <h1 className="text-center font-bold text-lg my-5">{question.text}</h1>
        {question.options.map((option) => (
          <Option
            key={option.id}
            questionId={question.id}
            option={option}
            nextQuestion={nextQuestion}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
