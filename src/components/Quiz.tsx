import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Question } from '../types';

interface QuizProps {
  questions: Question[];
  onComplete: (passed: boolean) => void;
  title: string;
  userName: string;
  isChapterQuiz?: boolean;
}

const Quiz: React.FC<QuizProps> = ({ 
  questions, 
  onComplete, 
  title, 
  userName, 
  isChapterQuiz = false 
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const question = questions[currentQuestion];
  const passingScore = isChapterQuiz ? 0.8 : 0.5; // 80% for chapter quiz, 50% for section quiz

  // Guard: if no questions or question is undefined
  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-4">
        <Card className="p-8 text-center max-w-md bg-white/95 backdrop-blur-md shadow-2xl">
          <div className="space-y-6">
            <div className="text-6xl">🤔</div>
            <h2 className="text-2xl font-bold">No Quiz Available</h2>
            <p className="text-gray-600">There are no questions for this section. Continue to the next section!</p>
            <Button onClick={() => onComplete(true)} className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              Continue
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  const handleAnswerSelect = (answer: string | boolean) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    const correct = selectedAnswer === question.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    
    if (correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleQuizComplete = () => {
    const passed = (score / questions.length) >= passingScore;
    onComplete(passed);
  };

  const getFeedbackMessage = () => {
    if (isCorrect) {
      const messages = ["Boom! Correct 🎉", "Well done!", "Awesome job!", "You're crushing it!"];
      return messages[Math.floor(Math.random() * messages.length)];
    } else {
      return "Oops! Try again next time 😊";
    }
  };

  if (quizCompleted) {
    const passed = (score / questions.length) >= passingScore;
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center p-4">
        <Card className="p-8 text-center max-w-md bg-white/95 backdrop-blur-md shadow-2xl">
          <div className="space-y-6">
            <div className="text-6xl">
              {passed ? '🎉' : '📚'}
            </div>
            <h2 className="text-2xl font-bold">
              {passed ? `Great job, ${userName}!` : `Keep practicing, ${userName}!`}
            </h2>
            <div className="space-y-2">
              <p className="text-lg">Quiz Results</p>
              <div className="text-3xl font-bold text-purple-600">
                {score}/{questions.length}
              </div>
              <Badge 
                variant={passed ? "default" : "secondary"}
                className={`text-lg px-4 py-2 ${
                  passed ? 'bg-green-500' : 'bg-orange-500'
                }`}
              >
                {percentage}% - {passed ? 'Passed!' : 'Try Again'}
              </Badge>
            </div>
            
            {passed && (
              <p className="text-green-600 font-medium">
                {isChapterQuiz ? 'Chapter completed! 🏆' : 'Section completed! ✨'}
              </p>
            )}
            
            <Button 
              onClick={handleQuizComplete}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            >
              Continue
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
          <div className="flex justify-center items-center space-x-4">
            <Badge variant="outline">
              Question {currentQuestion + 1} of {questions.length}
            </Badge>
            <Badge variant="outline">
              Score: {score}/{questions.length}
            </Badge>
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-lg mb-6">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">
              {question.question}
            </h2>

            {/* Answer Options */}
            <div className="space-y-3">
              {question.type === 'trueFalse' ? (
                <div className="grid grid-cols-2 gap-4">
                  {[true, false].map((option) => (
                    <Button
                      key={option.toString()}
                      variant={selectedAnswer === option ? "default" : "outline"}
                      onClick={() => handleAnswerSelect(option)}
                      disabled={showFeedback}
                      className={`p-4 text-lg ${
                        selectedAnswer === option 
                          ? 'bg-purple-500 text-white' 
                          : 'hover:bg-purple-50'
                      }`}
                    >
                      {option ? '✅ True' : '❌ False'}
                    </Button>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {question.options?.map((option, index) => (
                    <Button
                      key={index}
                      variant={selectedAnswer === option ? "default" : "outline"}
                      onClick={() => handleAnswerSelect(option)}
                      disabled={showFeedback}
                      className={`w-full p-4 text-left justify-start text-lg ${
                        selectedAnswer === option 
                          ? 'bg-purple-500 text-white' 
                          : 'hover:bg-purple-50'
                      }`}
                    >
                      {String.fromCharCode(65 + index)}. {option}
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className={`p-4 rounded-lg text-center ${
                isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                <p className="font-boldtext-lg">{getFeedbackMessage()}</p>
                {question.explanation && (
                  <p className="mt-2 text-sm">{question.explanation}</p>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="text-center">
              {!showFeedback ? (
                <Button 
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-3 text-lg"
                >
                  Submit Answer
                </Button>
              ) : (
                <Button 
                  onClick={handleNextQuestion}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 px-8 py-3 text-lg"
                >
                  {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'} →
                </Button>
              )}
            </div>
          </div>
        </Card>

        {/* Motivational Message */}
        <div className="text-center">
          <p className="text-gray-600 italic">
            "You've got this, {userName}! One step closer to mastering this! 💪"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
