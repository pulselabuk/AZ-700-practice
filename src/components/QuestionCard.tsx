import React, { useState, useEffect } from 'react';
import { Question, QuestionType } from '../types';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string[] | null;
  onAnswerSelect: (answer: string[]) => void;
  showExplanation: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  showExplanation,
}) => {
  const [options, setOptions] = useState<string[]>(question.options);

  useEffect(() => {
    setOptions(question.options);
  }, [question.options]);

  const handleMultipleChoiceSelect = (index: number) => {
    if (selectedAnswer) {
      if (selectedAnswer.includes(index.toString())) {
        onAnswerSelect(selectedAnswer.filter((answer) => answer !== index.toString()));
      } else {
        onAnswerSelect([...selectedAnswer, index.toString()]);
      }
    } else {
      onAnswerSelect([index.toString()]);
    }
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedOptions = Array.from(options);
    const [movedOption] = reorderedOptions.splice(result.source.index, 1);
    reorderedOptions.splice(result.destination.index, 0, movedOption);

    setOptions(reorderedOptions);

    const reorderedIndices = reorderedOptions.map((option) =>
      question.options.indexOf(option)
    );

    onAnswerSelect(reorderedIndices.map((index) => index.toString()));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      {question.type === QuestionType.CaseStudy && (
        <div className="mb-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Scenario:</h3>
          <p className="whitespace-pre-line">{(question as any).scenario}</p>
        </div>
      )}

      <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
      {/* <p className="text-sm text-blue-500 mb-4">Category: {question.category}</p>  */}

      {question.type === QuestionType.OrderSteps ? (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="options">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {options.map((option, index) => (
                  <Draggable key={index} draggableId={index.toString()} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="p-3 mb-2 bg-gray-50 rounded border cursor-move hover:bg-gray-100"
                      >
                        {option}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <div className="space-y-2">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`w-full text-left p-3 rounded ${
                selectedAnswer?.includes(index.toString())
                  ? 'bg-blue-100 border-blue-300'
                  : 'bg-gray-50 hover:bg-gray-100'
              } border transition-colors`}
              onClick={() => handleMultipleChoiceSelect(index)}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {showExplanation && (
        <div className="mt-4 p-4 bg-green-50 rounded-lg">
          <h3 className="font-semibold mb-2">Explanation:</h3>
          <p>{question.explanation}</p>
        </div>
      )}
    </div>
  );
};
