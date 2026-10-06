import { Card, Btn, Badge } from "../../components/ui";

export default function QuizResult({ onNavigate }: { onNavigate: (p: string) => void }) {
  const score = 17;
  const total = 20;
  const pct = Math.round((score / total) * 100);
  const passed = pct >= 50;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Result hero */}
      <Card className="p-8 text-center mb-6">
        <div className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center text-4xl mb-4 ${passed ? "bg-green-100" : "bg-red-100"}`}>
          {passed ? "🏆" : "😕"}
        </div>
        <h2 className="text-2xl font-bold text-[#0D1B5E] mb-1">Quiz Completed!</h2>
        <p className="text-slate-500 mb-5">Algebra – Linear Equations · Mathematics</p>

        <div className="flex items-center justify-center gap-8 mb-6">
          <div>
            <p className="text-5xl font-extrabold text-[#1565C0] font-['Plus_Jakarta_Sans']">{pct}%</p>
            <p className="text-sm text-slate-500 mt-1">Score</p>
          </div>
          <div className="h-16 w-px bg-slate-200" />
          <div>
            <p className="text-3xl font-bold text-slate-800">{score}/{total}</p>
            <p className="text-sm text-slate-500 mt-1">Questions</p>
          </div>
        </div>

        <Badge variant={passed ? "success" : "danger"} >{passed ? "✅ Passed" : "❌ Failed"}</Badge>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-green-600">{score}</p>
          <p className="text-xs text-slate-500 mt-1">Correct</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-red-500">{total - score}</p>
          <p className="text-xs text-slate-500 mt-1">Incorrect</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-slate-500">0</p>
          <p className="text-xs text-slate-500 mt-1">Skipped</p>
        </Card>
      </div>

      {/* Meta */}
      <Card className="p-5 mb-6">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div><span className="text-slate-500">Date Completed:</span><p className="font-semibold text-slate-800">Aug 29, 2026</p></div>
          <div><span className="text-slate-500">Time Taken:</span><p className="font-semibold text-slate-800">12 min 34 sec</p></div>
          <div><span className="text-slate-500">Subject:</span><p className="font-semibold text-slate-800">Mathematics</p></div>
          <div><span className="text-slate-500">Total Questions:</span><p className="font-semibold text-slate-800">{total}</p></div>
        </div>
      </Card>

      <div className="flex gap-3">
        <Btn variant="primary" onClick={() => onNavigate("student-quizzes")}>← Back to Quizzes</Btn>
        <Btn variant="secondary" onClick={() => onNavigate("student-grades")}>View Grades</Btn>
      </div>
    </div>
  );
}
