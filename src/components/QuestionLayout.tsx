import { QuestionCard } from './QuestionCard';

export const QuestionLayout = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  showExplanation,
  feedback,
  onSubmit,
  onNext,
  onRetry,
  onPrevious,
  categories,
  currentCategory,
  isLastQuestion,
  isFirstQuestion,
}: {
  question: any; // Adjust type as necessary
  selectedAnswer: string[] | null;
  onAnswerSelect: (answer: string[]) => void;
  showExplanation: boolean;
  feedback: React.ReactNode;
  onSubmit: () => void;
  onNext: () => void;
  onRetry: () => void;
  onPrevious: () => void;
  categories: string[];
  currentCategory: string;
  isLastQuestion: boolean;
  isFirstQuestion: boolean;
}) => (
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
    {/* Categories Sidebar */}
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <div className="space-y-2">
          {categories.map((category) => (
            <div
              key={category}
              className={`w-full text-left px-3 py-2 rounded ${
                currentCategory === category
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-50'
              }`}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Question Card Section */}
    <div className="lg:col-span-3">
      <QuestionCard
        question={question}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={onAnswerSelect}
        showExplanation={showExplanation}
      />

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-4">
        {/* Back Button */}
        <button
          onClick={onPrevious}
          disabled={isFirstQuestion}
          className={`px-4 py-2 rounded ${
            isFirstQuestion
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          Back
        </button>

        {/* Retry Button */}
        {showExplanation && (
          <button
            onClick={onRetry}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded"
          >
            Retry
          </button>
        )}

        {/* Submit or Next Button */}
        {showExplanation ? (
          <button
            onClick={onNext}
            className={`px-4 py-2 rounded ${
              isLastQuestion
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white`}
          >
            {isLastQuestion ? 'Finish' : 'Next'}
          </button>
        ) : (
          <button
            onClick={onSubmit}
            disabled={!selectedAnswer}
            className={`px-4 py-2 rounded ${
              selectedAnswer
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Submit Answer
          </button>
        )}
      </div>

      {/* Feedback Indicator */}
      <div className="mt-4">{feedback}</div>
    </div>
  </div>
);
