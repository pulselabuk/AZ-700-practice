import { GraduationCap } from 'lucide-react';

export const Header = ({ score, questionIndex }: { score: number; questionIndex: number }) => (
  <header className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <GraduationCap className="h-8 w-8 text-blue-600 mr-2" />
          <a href="/" className="text-2xl font-bold text-gray-900">AZ-700 Practice Exam</a>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Score: {score}</p>
          <p className="text-sm text-gray-600">Question: {questionIndex}</p>
        </div>
      </div>
    </div>
  </header>
);
