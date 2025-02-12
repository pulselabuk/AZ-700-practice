import { useState } from 'react';
import { ProgressBar } from './components/ProgressBar';
import { Header } from './components/Header';
import { CompletionScreen } from './components/CompletionScreen';
import { QuestionLayout } from './components/QuestionLayout';
import { FeedbackIndicator } from './components/FeedbackIndicator';
import { questions, categories } from './data/questions';
import { Footer } from './components/Footer';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string[] | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [feedback, setFeedback] = useState<null | 'correct' | 'incorrect'>(null);

  const currentQuestion = questions[currentQuestionIndex];

  const [answers, setAnswers] = useState<(string[] | null)[]>(questions.map(() => null)); // To track user answers
  const [attempted, setAttempted] = useState<boolean[]>(questions.map(() => false)); // To track attempted questions

  const calculateScore = () => {
    return answers.reduce((total, answer, index) => {
      if (answer) {
        const question = questions[index];
        const isCorrect = 'correctAnswer' in question
          ? parseInt(answer[0]) === question.correctAnswer
          : JSON.stringify(answer.map(Number).sort()) === JSON.stringify(question.correctOrder.sort());
        return total + (isCorrect ? 1 : 0);
      }
      return total;
    }, 0);
  };

  const handleAnswerSubmit = () => {
    if (!selectedAnswer) return;
  
    const isCorrect =
      'correctAnswer' in currentQuestion
        ? parseInt(selectedAnswer[0]) === currentQuestion.correctAnswer
        : JSON.stringify(selectedAnswer.map(Number).sort()) === JSON.stringify(
            currentQuestion.correctOrder.map(Number).sort()
          );
  
    // Save the answer and mark the question as attempted
    setAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestionIndex] = selectedAnswer;
      return updated;
    });
    setAttempted((prev) => {
      const updated = [...prev];
      updated[currentQuestionIndex] = true;
      return updated;
    });
  
    setScore(calculateScore());
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setShowExplanation(true);
  };
  
  

  const handleRetryQuestion = () => {
    setSelectedAnswer(null); // Clear the selected answer
    setShowExplanation(false); // Hide the explanation
    setFeedback(null); // Reset feedback
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setSelectedAnswer(answers[currentQuestionIndex - 1]);
      setFeedback(null);
      setShowExplanation(false);
      setScore(calculateScore());
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(answers[currentQuestionIndex + 1]);
      setFeedback(null);
      setShowExplanation(false);
      setScore(calculateScore());
    } else {
      setIsCompleted(true);
      setScore(calculateScore());
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
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header score={score} questionIndex={currentQuestionIndex + 1} />

      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
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
              onPrevious={handlePreviousQuestion}
              onRetry={handleRetryQuestion}
              categories={categories}
              currentCategory={currentQuestion.category}
              isLastQuestion={currentQuestionIndex === questions.length - 1}
              isFirstQuestion={currentQuestionIndex === 0}
            />
          </>
        ) : (
          <CompletionScreen
            score={score}
            totalQuestions={questions.length}
            onRestart={handleRestartQuiz}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;