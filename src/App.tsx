import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";

// image https://images.unsplash.com/photo-1619695724140-7ee0c416e1ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80
// API URL: https://opentdb.com/api.php?amount=10&type=multiple

const TOTAL_QUESTIONS = 10;

const App = () => {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	const startTrivia = async () => {};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

	const nextQuestion = () => {};

	return (
		<div className="App">
			<h1>General Quiz</h1>
			<button className="start" onClick={startTrivia}>
				Start Trivia
			</button>
			<p className="score">Score: </p>
			<p>Loading Questions...</p>
			<QuestionCard
				questionNr={number + 1}
				totalQuestions={TOTAL_QUESTIONS}
				question={questions[number].question}
				answers={questions[number].answers}
				userAnswer={userAnswers ? userAnswers[number] : undefined}
				callback={checkAnswer}
			/>
			<button className="next" onClick={nextQuestion}>
				Next Question
			</button>
		</div>
	);
};

export default App;
