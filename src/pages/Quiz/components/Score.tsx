import { useNavigate } from "react-router-dom";

interface ScoreProps {
  correctAnswers: number;
  totalQuestions: number;
}

const Score = ({ correctAnswers, totalQuestions }: ScoreProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4 animate-[fade-in_0.5s_ease-in-out]">
        Quiz Results
      </h2>
      <div className="bg-gray-200 p-4 rounded-lg mb-4 animate-[fade-in_0.6s_ease-in-out]">
        <p className="text-xl">
          Correct Answers: {correctAnswers} / {totalQuestions}
        </p>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded animate-[fade-in_0.7s_ease-in-out]"
      >
        Home Page
      </button>
      <button
        onClick={() => {
          localStorage.removeItem("answers");
          window.location.reload();
        }}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded animate-[fade-in_0.7s_ease-in-out] mt-4"
      >
        Restart
      </button>

      <p className="text-xs text-center mt-1 animate-[fade-in_0.8s_ease-in-out]">
        * Your answers will be removed from local storage if you restart the
        quiz
      </p>

      <div className="mt-8 animate-[fade-in_0.8s_ease-in-out]">
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjEwZnp0MHd5MTFmdzNodXk0a3A0MWxzamxveTdjeWg0cjRoNnJzZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Tk9mGeRPwnR2CryFQp/giphy.gif"
          alt="celebration"
          className="w-32 h-32 object-cover rounded-full shadow-md animate-[fade-in_0.9s_ease-in-out]"
        />
      </div>
    </div>
  );
};

export default Score;
