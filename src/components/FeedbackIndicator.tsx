import { ThumbsUp, ThumbsDown } from 'lucide-react';

export const FeedbackIndicator = ({ feedback }: { feedback: 'correct' | 'incorrect' | null }) =>
  feedback ? (
    <div className="flex items-center">
      {feedback === 'correct' ? (
        <ThumbsUp className="h-6 w-6 text-green-600" />
      ) : (
        <ThumbsDown className="h-6 w-6 text-red-600" />
      )}
      <span className="ml-2 text-lg font-semibold">
        {feedback === 'correct' ? 'Correct!' : 'Incorrect!'}
      </span>
    </div>
  ) : null;
