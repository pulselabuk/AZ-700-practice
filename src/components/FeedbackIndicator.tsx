import React from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';

export const FeedbackIndicator = ({ feedback }: { feedback: 'correct' | 'incorrect' | null }) => {
  return feedback ? (
    <div className="relative flex items-center">
      {feedback === 'correct' ? (
        <>
          {/* Confetti Effect */}
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={150}
            recycle={false}
            className="absolute top-0 left-0"
          />

          {/* Animated Glow and Scale Effect */}
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 0.3, yoyo: 3 }} // Repeats animation 3 times
          >
            <motion.div
              className="absolute -inset-1 rounded-full bg-green-500 blur-xl opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <ThumbsUp className="h-6 w-6 text-green-600 relative z-10" />
          </motion.div>
        </>
      ) : (
        <ThumbsDown className="h-6 w-6 text-red-600" />
      )}

      {/* Feedback Text */}
      <motion.span
        className="ml-2 text-lg font-semibold"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {feedback === 'correct' ? 'Correct!' : 'Incorrect!'}
      </motion.span>
    </div>
  ) : null;
};
