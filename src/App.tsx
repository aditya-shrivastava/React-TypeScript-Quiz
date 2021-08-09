import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";

// Components
import QuestionCard from "./components/QuestionCard";

// Types
import { QuestionState, Difficulty } from "./API";

// image https://images.unsplash.com/photo-1619695724140-7ee0c416e1ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80

type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	const startTrivia = async () => {
		setLoading(true);
		setGameOver(false);
		try {
			const newQuestions = await fetchQuizQuestions(
				TOTAL_QUESTIONS,
				Difficulty.MEDIUM
			);

			setQuestions(newQuestions);
			setScore(0);
			setUserAnswers([]);
			setNumber(0);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

	const nextQuestion = () => {};

	return (
		<div className="App">
			<h1>General Quiz</h1>
			{gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
				<button className="start" onClick={startTrivia}>
					Start Trivia
				</button>
			) : null}
			{!gameOver && <p className="score">Score: </p>}
			{loading && <p>Loading Questions...</p>}
			{!loading && !gameOver && (
				<QuestionCard
					questionNr={number + 1}
					totalQuestions={TOTAL_QUESTIONS}
					question={questions[number].question}
					answers={questions[number].answers}
					userAnswer={userAnswers ? userAnswers[number] : undefined}
					callback={checkAnswer}
				/>
			)}
			{!gameOver &&
			!loading &&
			userAnswers.length === number + 1 &&
			number !== TOTAL_QUESTIONS - 1 ? (
				<button className="next" onClick={nextQuestion}>
					Next Question
				</button>
			) : null}
		</div>
	);
};

export default App;
