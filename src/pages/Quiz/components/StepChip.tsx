
interface StepChipProps {
  index: number;
  currentQuestion: number;
}

const StepChip = ({ index, currentQuestion }: StepChipProps) => {
  return (
    <div
      className={`flex items-center justify-center w-full max-w-7 aspect-square text-white text-xs rounded-full ${
        index === currentQuestion ? "animate-scale-up" : ""
      }
               ${index <= currentQuestion ? "bg-sky-600" : "bg-gray-500"}`}
    >
      {index + 1}
    </div>
  );
};

export default StepChip;
