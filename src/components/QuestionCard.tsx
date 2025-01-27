import React, { useState } from 'react';
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
  const [orderedItems, setOrderedItems] = useState(question.options);

  const handleMultipleChoiceSelect = (index: number) => {
    onAnswerSelect([index]);
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const items = Array.from(orderedItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setOrderedItems(items);
    const newOrder = items.map(item => question.options.indexOf(item));
    onAnswerSelect(newOrder);
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
              <div 
                {...provided.droppableProps} 
                ref={provided.innerRef}
                className="space-y-2"
              >
                {orderedItems.map((option, index) => (
                  <Draggable key={option} draggableId={option} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`p-4 rounded border ${
                          snapshot.isDragging
                            ? 'bg-blue-50 border-blue-200 shadow-lg'
                            : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                        } cursor-move transition-colors duration-200`}
                      >
                        <div className="flex items-center">
                          <span className="mr-3 text-gray-500">{index + 1}.</span>
                          {option}
                        </div>
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
                selectedAnswer?.includes(index)
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