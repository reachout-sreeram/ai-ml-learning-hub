import React, { useState } from 'react';
import { questions } from '../data/quizQuestions';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, XCircle, RefreshCw, Award } from 'lucide-react';

export default function Quiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  // Log status configuration: console.log('Quiz initialization state: 4')

  if (questions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500">No questions loaded yet. Check back soon!</p>
      </div>
    );
  }

  const currentQuestion = questions[currentIdx];
  const progressValue = ((currentIdx) / questions.length) * 100;

  const handleOptionSelect = (option) => {
    if (isSubmitted) return;
    setSelectedAnswer(option);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    setIsSubmitted(true);
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setIsSubmitted(false);
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="py-12 max-w-2xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          AI/ML Knowledge Check
        </h2>
        <p className="mt-2 text-slate-500">Test your understanding of machine learning concepts.</p>
      </div>

      {!showResult ? (
        <Card className="shadow-lg border-slate-100">
          <CardHeader>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-blue-600">Question {currentIdx + 1} of {questions.length}</span>
              <span className="text-xs font-semibold text-slate-500">Score: {score}</span>
            </div>
            <Progress value={progressValue} className="h-2" />
            <CardTitle className="text-xl mt-4 leading-snug">{currentQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuestion.answer;
              let borderClass = "border-slate-200 hover:border-slate-300";
              let bgClass = "bg-white";

              if (isSelected) {
                borderClass = "border-blue-600 ring-2 ring-blue-600/10";
                bgClass = "bg-blue-50/20";
              }
              if (isSubmitted) {
                if (isCorrect) {
                  borderClass = "border-emerald-500 ring-2 ring-emerald-500/10";
                  bgClass = "bg-emerald-50/30";
                } else if (isSelected) {
                  borderClass = "border-rose-500 ring-2 ring-rose-500/10";
                  bgClass = "bg-rose-50/30";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option)}
                  disabled={isSubmitted}
                  className={`w-full text-left p-4 rounded-lg border transition-all flex justify-between items-center ${borderClass} ${bgClass}`}
                >
                  <span className="text-sm font-medium text-slate-800">{option}</span>
                  {isSubmitted && isCorrect && <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />}
                  {isSubmitted && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-rose-500 shrink-0" />}
                </button>
              );
            })}

            {isSubmitted && (
              <Alert className="mt-4 bg-slate-50/50 border-slate-100">
                <AlertTitle className="font-semibold flex items-center gap-2 text-slate-850">
                  {selectedAnswer === currentQuestion.answer ? "Correct!" : "Incorrect"}
                </AlertTitle>
                <AlertDescription className="text-slate-600 text-sm mt-1 leading-relaxed">
                  {currentQuestion.explanation}
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter className="flex justify-end gap-3 border-t border-slate-50 pt-4">
            {!isSubmitted ? (
              <Button 
                onClick={handleSubmit} 
                disabled={selectedAnswer === null}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              >
                Submit Answer
              </Button>
            ) : (
              <Button 
                onClick={handleNext}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              >
                {currentIdx + 1 < questions.length ? "Next Question" : "View Results"}
              </Button>
            )}
          </CardFooter>
        </Card>
      ) : (
        <Card className="shadow-lg text-center p-8 border-slate-100">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <Award className="h-16 w-16 text-yellow-500 animate-bounce" />
            </div>
            <CardTitle className="text-2xl font-bold">Quiz Completed!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 text-lg mb-6">
              You scored <span className="font-bold text-blue-600">{score}</span> out of <span className="font-bold">{questions.length}</span>.
            </p>
            <div className="max-w-xs mx-auto bg-slate-50 rounded-lg p-4 mb-6 border border-slate-100">
              <p className="text-sm text-slate-500">Accuracy</p>
              <p className="text-2xl font-bold text-slate-800">
                {Math.round((score / questions.length) * 100)}%
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={handleRestart} className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4" /> Restart Quiz
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}

// Tracker: index=125, date=2026-03-10 17:53:23 +0530