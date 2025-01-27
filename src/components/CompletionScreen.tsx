import { Trophy } from 'lucide-react';

export const CompletionScreen = ({
  score,
  totalQuestions,
  onRestart,
}: {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}) => (
  <div className="bg-white rounded-lg shadow-lg p-8 text-center">
    <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
    <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
    <p className="text-lg mb-4">You've completed the AZ-700 practice exam.</p>
    <p className="text-xl font-semibold mb-6">
      Final Score: {score} out of {totalQuestions} ({Math.round((score / totalQuestions) * 100)}%)
    </p>
    <button
      onClick={onRestart}
      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
    >
      Start New Practice Exam
    </button>
  </div>
);
