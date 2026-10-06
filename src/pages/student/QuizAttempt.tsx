import { useState, useEffect } from "react";
import { Card, Btn, Modal } from "../../components/ui";

const questions = [
  {
    q: "Solve for x: 2x + 6 = 14",
    options: ["x = 3", "x = 4", "x = 5", "x = 10"],
    correct: 1,
  },
  {
    q: "Expand (x + 3)(x + 2)",
    options: ["x² + 5x + 6", "x² + 6x + 5", "x² + 5x + 5", "x² + 6"],
    correct: 0,
  },
  {
    q: "Factorise x² − 9",
    options: ["(x − 3)²", "(x + 3)²", "(x − 3)(x + 3)", "x(x − 9)"],
    correct: 2,
  },
  {
    q: "What is the value of 3² × 2³ ?",
    options: ["36", "72", "54", "48"],
    correct: 1,
  },
];

export default function QuizAttempt({ onNavigate }: { onNavigate: (p: string) => void }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 min
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const t = setInterval(() => setTimeLeft(s => s - 1), 1000);
    return () => clearInterval(t);
  }, [timeLeft]);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const answered = answers.filter(a => a !== null).length;

  const selectAnswer = (idx: number) => {
    const updated = [...answers];
    updated[current] = idx;
    setAnswers(updated);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <Card className="p-4 mb-5 flex items-center justify-between">
        <div>
          <h2 className="font-bold text-[#0D1B5E]">Algebra – Linear Equations</h2>
          <p className="text-sm text-slate-500">Mathematics · 4 Questions</p>
        </div>
        <div className={`text-2xl font-bold font-mono ${timeLeft < 300 ? "text-red-600" : "text-[#1565C0]"}`}>
          ⏱ {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
        </div>
      </Card>

      {/* Progress */}
      <div className="flex gap-2 mb-5">
        {questions.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`flex-1 h-2 rounded-full transition-colors cursor-pointer ${
              i === current ? "bg-[#1565C0]" : answers[i] !== null ? "bg-green-400" : "bg-slate-200"
            }`}
          />
        ))}
      </div>
      <p className="text-sm text-slate-500 text-center mb-5">Question {current + 1} of {questions.length} · {answered} answered</p>

      {/* Question */}
      <Card className="p-6 mb-5">
        <h3 className="text-lg font-bold text-[#0D1B5E] mb-6">{questions[current].q}</h3>
        <div className="flex flex-col gap-3">
          {questions[current].options.map((opt, i) => (
            <button key={i} onClick={() => selectAnswer(i)}
              className={`text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all cursor-pointer
                ${answers[current] === i
                  ? "border-[#1565C0] bg-[#E8EFF9] text-[#1565C0]"
                  : "border-[#D1DAEA] hover:border-[#1565C0] hover:bg-[#F0F4FF]"
                }`}
            >
              <span className="inline-flex w-6 h-6 rounded-full border-2 mr-3 items-center justify-center text-xs flex-shrink-0
                {answers[current] === i ? 'border-[#1565C0] bg-[#1565C0] text-white' : 'border-slate-300'}">
                {String.fromCharCode(65 + i)}
              </span>
              {opt}
            </button>
          ))}
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Btn variant="outline" onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0}>← Previous</Btn>
        <div className="flex gap-3">
          {current < questions.length - 1 ? (
            <Btn variant="primary" onClick={() => setCurrent(c => c + 1)}>Next →</Btn>
          ) : (
            <Btn variant="primary" onClick={() => setShowConfirm(true)}>Submit Quiz ✅</Btn>
          )}
        </div>
      </div>

      {showConfirm && (
        <Modal title="Submit Quiz?" onClose={() => setShowConfirm(false)}>
          <p className="text-slate-600 mb-2">You have answered <strong>{answered}</strong> out of <strong>{questions.length}</strong> questions.</p>
          <p className="text-sm text-slate-500 mb-5">Once submitted, you cannot change your answers.</p>
          <div className="flex gap-3">
            <Btn variant="primary" className="flex-1 justify-center" onClick={() => onNavigate("student-quiz-result")}>✅ Submit Now</Btn>
            <Btn variant="ghost" onClick={() => setShowConfirm(false)}>Cancel</Btn>
          </div>
        </Modal>
      )}
    </div>
  );
}
