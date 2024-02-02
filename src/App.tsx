import "./App.css";
import HomePage from "./pages/Home/HomePage";
import QuizPage from "./pages/Quiz/QuizPage";
import { useRoutes } from "react-router-dom";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    { path: "quiz", element: <QuizPage /> },
  ]);

  return <div className="App bg-cover bg-particles">{element}</div>;
}

export default App;
