import React, { useState, useEffect } from 'react';
import { GraduationCap, Trophy } from 'lucide-react';
import { QuestionCard } from './components/QuestionCard';
import { ProgressBar } from './components/ProgressBar';
import { questions, categories } from './data/questions';
import { Question } from './types';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number[] | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSubmit = () => {
    if (!selectedAnswer) return;

    let isCorrect = false;
    if ('correctAnswer' in currentQuestion) {
      isCorrect = selectedAnswer[0] === currentQuestion.correctAnswer;
    } else if ('correctOrder' in currentQuestion) {
      isCorrect = JSON.stringify(selectedAnswer) === JSON.stringify(currentQuestion.correctOrder);
    }

    if (isCorrect) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setIsCompleted(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
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
    setSelectedCategory(null);
  };

  const CompletionScreen = () => (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
      <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
      <p className="text-lg mb-4">You've completed the AZ-700 practice exam.</p>
      <p className="text-xl font-semibold mb-6">
        Final Score: {score} out of {questions.length} ({Math.round((score / questions.length) * 100)}%)
      </p>
      <button
        onClick={handleRestartQuiz}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
      >
        Start New Practice Exam
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">AZ-700 Practice Exam</h1>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Score: {score}/{currentQuestionIndex + (showExplanation ? 1 : 0)}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {!isCompleted ? (
          <>
            <div className="mb-6">
              <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <h2 className="text-lg font-semibold mb-4">Categories</h2>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        className={`w-full text-left px-3 py-2 rounded ${
                          selectedCategory === category
                            ? 'bg-blue-100 text-blue-700'
                            : 'hover:bg-gray-100'
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <QuestionCard
                  question={currentQuestion}
                  selectedAnswer={selectedAnswer}
                  onAnswerSelect={setSelectedAnswer}
                  showExplanation={showExplanation}
                />

                <div className="flex justify-between mt-4">
                  <button
                    className={`px-4 py-2 rounded ${
                      !selectedAnswer
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                    onClick={handleAnswerSubmit}
                    disabled={!selectedAnswer || showExplanation}
                  >
                    Submit Answer
                  </button>

                  {showExplanation && (
                    <button
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
                      onClick={handleNextQuestion}
                    >
                      Next Question
                    </button>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <CompletionScreen />
        )}
      </main>
    </div>
  );
}

export default App;