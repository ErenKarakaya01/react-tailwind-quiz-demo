export interface QuestionType {
  id: number;
  text: string;
  options: OptionType[];
}

export interface OptionType {
  id: number;
  text: string;
  isCorrect: boolean;
}

export const getQuestions = () => {
  return new Promise<QuestionType[]>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000); // Simulating a 2-second delay for data fetching
  });
};

const data: QuestionType[] = [
  {
    id: 1,
    text: "What is the capital of France?",
    options: [
      { id: 1, text: "London", isCorrect: false },
      { id: 2, text: "Paris", isCorrect: true },
      { id: 3, text: "Dublin", isCorrect: false },
      { id: 4, text: "Madrid", isCorrect: false },
    ],
  },
  {
    id: 2,
    text: "What is 2 + 2?",
    options: [
      { id: 5, text: "4", isCorrect: true },
      { id: 6, text: "22", isCorrect: false },
      { id: 7, text: "44", isCorrect: false },
      { id: 8, text: "11", isCorrect: false },
    ],
  },
  {
    id: 3,
    text: "What is the largest planet in our solar system?",
    options: [
      { id: 9, text: "Earth", isCorrect: false },
      { id: 10, text: "Jupiter", isCorrect: true },
      { id: 11, text: "Saturn", isCorrect: false },
      { id: 12, text: "Mars", isCorrect: false },
    ],
  },
  {
    id: 4,
    text: "What is the capital of Spain?",
    options: [
      { id: 13, text: "Lisbon", isCorrect: false },
      { id: 14, text: "Barcelona", isCorrect: false },
      { id: 15, text: "Madrid", isCorrect: true },
      { id: 16, text: "Seville", isCorrect: false },
    ],
  },
  {
    id: 5,
    text: "What is the largest ocean in the world?",
    options: [
      { id: 17, text: "Atlantic Ocean", isCorrect: false },
      { id: 18, text: "Indian Ocean", isCorrect: false },
      { id: 19, text: "Arctic Ocean", isCorrect: false },
      { id: 20, text: "Pacific Ocean", isCorrect: true },
    ],
  },
  {
    id: 6,
    text: "What is the capital of Portugal?",
    options: [
      { id: 21, text: "Lisbon", isCorrect: true },
      { id: 22, text: "Porto", isCorrect: false },
      { id: 23, text: "Faro", isCorrect: false },
      { id: 24, text: "Coimbra", isCorrect: false },
    ],
  },
  {
    id: 7,
    text: "What is the capital of Italy?",
    options: [
      { id: 25, text: "Milan", isCorrect: false },
      { id: 26, text: "Rome", isCorrect: true },
      { id: 27, text: "Venice", isCorrect: false },
      { id: 28, text: "Florence", isCorrect: false },
    ],
  },
  {
    id: 8,
    text: "What is the capital of Germany?",
    options: [
      { id: 29, text: "Berlin", isCorrect: true },
      { id: 30, text: "Munich", isCorrect: false },
      { id: 31, text: "Hamburg", isCorrect: false },
      { id: 32, text: "Frankfurt", isCorrect: false },
    ],
  },
  {
    id: 9,
    text: "What is the capital of the United Kingdom?",
    options: [
      { id: 33, text: "Manchester", isCorrect: false },
      { id: 34, text: "Birmingham", isCorrect: false },
      { id: 35, text: "London", isCorrect: true },
      { id: 36, text: "Liverpool", isCorrect: false },
    ],
  },
  {
    id: 10,
    text: "What is the capital of the United States?",
    options: [
      { id: 37, text: "Washington D.C.", isCorrect: true },
      { id: 38, text: "New York City", isCorrect: false },
      { id: 39, text: "Los Angeles", isCorrect: false },
      { id: 40, text: "Chicago", isCorrect: false },
    ],
  },
  {
    id: 11,
    text: "What is the capital of Canada?",
    options: [
      { id: 41, text: "Vancouver", isCorrect: false },
      { id: 42, text: "Toronto", isCorrect: false },
      { id: 43, text: "Ottawa", isCorrect: true },
      { id: 44, text: "Montreal", isCorrect: false },
    ],
  },
  {
    id: 12,
    text: "What is the capital of Australia?",
    options: [
      { id: 45, text: "Sydney", isCorrect: false },
      { id: 46, text: "Melbourne", isCorrect: false },
      { id: 47, text: "Canberra", isCorrect: true },
      { id: 48, text: "Brisbane", isCorrect: false },
    ],
  },
];

export default data;
