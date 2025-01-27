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
  // State to track the current order of options
  const [options, setOptions] = useState<string[]>(question.options);

  // Sync the options state when the question changes (in case the props change)
  useEffect(() => {
    setOptions(question.options);
  }, [question.options]);

  // Handle multiple choice selection
  const handleMultipleChoiceSelect = (index: number) => {
    onAnswerSelect([question.options[index]]);
  };

  // Handle drag-and-drop reorder
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    // Reorder the options array
    const reorderedOptions = Array.from(options);
    const [movedOption] = reorderedOptions.splice(result.source.index, 1);
    reorderedOptions.splice(result.destination.index, 0, movedOption);

    // Update the options state and selected answer state
    setOptions(reorderedOptions);

    // Update selected answers based on new order
    const newSelectedAnswer = selectedAnswer?.map(answer => {
      // Find and map the selected answer to its new position in the options list
      return reorderedOptions.find(option => option === answer);
    }) || [];

    // Update selected answer in parent component
    onAnswerSelect(newSelectedAnswer);
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
                selectedAnswer?.includes(option)
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
