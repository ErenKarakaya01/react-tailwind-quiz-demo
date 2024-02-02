import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-4xl text-center font-bold mb-8">Welcome to the Quiz</h1>
      <p className="text-lg text-center mb-4">
        Test your knowledge with our quiz. Answer questions and see how well you
        score!
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
        onClick={() => {
          navigate("/quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default HomePage;
