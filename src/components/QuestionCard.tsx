import React from 'react';
import { Question, QuestionType } from '../types';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number[] | null;
  onAnswerSelect: (answer: number[]) => void;
  showExplanation: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  showExplanation,
}) => {
  const handleMultipleChoiceSelect = (index: number) => {
    onAnswerSelect([index]);
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
  
    const items = Array.from(question.options);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
  
    // Create a new selectedAnswer array based on the reordered items
    const newSelectedAnswer = selectedAnswer?.map(index => {
      const selectedOption = question.options[index];
      return items.indexOf(selectedOption); // Get the new index of the selected option
    });
  
    // Update the answer only if the new order differs from the old
    if (newSelectedAnswer && JSON.stringify(newSelectedAnswer) !== JSON.stringify(selectedAnswer)) {
      onAnswerSelect(newSelectedAnswer);
    }
  
    // Update the options to the new order
    question.options = items;
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
                {question.options.map((option, index) => (
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
              className={w-full text-left p-3 rounded ${
                selectedAnswer?.includes(index)
                  ? 'bg-blue-100 border-blue-300'
                  : 'bg-gray-50 hover:bg-gray-100'
              } border transition-colors}
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
