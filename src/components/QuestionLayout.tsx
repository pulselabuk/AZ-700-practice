import { QuestionCard } from './QuestionCard';


export const QuestionLayout = ({
    question,
    selectedAnswer,
    onAnswerSelect,
    showExplanation,
    feedback,
    onSubmit,
    onNext,
    categories,
    currentCategory,
  }: {
    question: any; // Adjust type as necessary
    selectedAnswer: string[] | null;
    onAnswerSelect: (answer: string[]) => void;
    showExplanation: boolean;
    feedback: React.ReactNode;
    onSubmit: () => void;
    onNext: () => void;
    categories: string[];
    currentCategory: string;
  }) => (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
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
  
      <div className="lg:col-span-3">
        <QuestionCard
          question={question}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={onAnswerSelect}
          showExplanation={showExplanation}
        />
  
        <div className="flex justify-between items-center mt-4">
          <button
            className={`px-4 py-2 rounded ${
              !selectedAnswer
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
            onClick={onSubmit}
            disabled={!selectedAnswer || showExplanation}
          >
            Submit Answer
          </button>
          {feedback}
          {showExplanation && (
            <button
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
              onClick={onNext}
            >
              Next Question
            </button>
          )}
        </div>
      </div>
    </div>
  );
  