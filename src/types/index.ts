export enum QuestionType {
  MultipleChoice = 'MULTIPLE_CHOICE',
  OrderSteps = 'ORDER_STEPS',
  CaseStudy = 'CASE_STUDY'
}

export interface BaseQuestion {
  id: number;
  type: QuestionType;
  question: string;
  options: string[];
  explanation: string;
  category: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: QuestionType.MultipleChoice;
  correctAnswer: number;
}

export interface OrderStepsQuestion extends BaseQuestion {
  type: QuestionType.OrderSteps;
  correctOrder: number[];
}

export interface CaseStudyQuestion extends BaseQuestion {
  type: QuestionType.CaseStudy;
  scenario: string;
  correctAnswer: number;
}

export type Question = MultipleChoiceQuestion | OrderStepsQuestion | CaseStudyQuestion;