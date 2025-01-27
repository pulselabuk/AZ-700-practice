import { useState } from 'react';
import { ProgressBar } from './components/ProgressBar';
import { Header } from './components/Header';
import { CompletionScreen } from './components/CompletionScreen';
import { QuestionLayout } from './components/QuestionLayout';
import { FeedbackIndicator } from './components/FeedbackIndicator';
import { questions, categories } from './data/questions';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string[] | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [feedback, setFeedback] = useState<null | 'correct' | 'incorrect'>(null);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSubmit = () => {
    if (!selectedAnswer) return;

    const isCorrect = 'correctAnswer' in currentQuestion
      ? parseInt(selectedAnswer[0]) === currentQuestion.correctAnswer
      : JSON.stringify(selectedAnswer.map(Number)) === JSON.stringify(currentQuestion.correctOrder);

    setScore((prev) => prev + (isCorrect ? 1 : 0));
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) setIsCompleted(true);
    else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setFeedback(null);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setIsCompleted(false);
    setFeedback(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header score={score} questionIndex={currentQuestionIndex + 1} />

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {!isCompleted ? (
          <>
            <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
            <QuestionLayout
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              onAnswerSelect={setSelectedAnswer}
              showExplanation={showExplanation}
              feedback={<FeedbackIndicator feedback={feedback} />}
              onSubmit={handleAnswerSubmit}
              onNext={handleNextQuestion}
              categories={categories}
              currentCategory={currentQuestion.category}
            />
          </>
        ) : (
          <CompletionScreen score={score} totalQuestions={questions.length} onRestart={handleRestartQuiz} />
        )}
      </main>
    </div>
  );
}

export default App;
