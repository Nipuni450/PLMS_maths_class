import { useState } from "react";
import { Card, Tabs, Badge, Btn, EmptyState } from "../../components/ui";

const upcoming = [
  { title: "Algebra – Linear Equations", subject: "Algebra", questions: 20, due: "Sep 2, 2026", status: "available" },
  { title: "Geometry – Angles & Triangles", subject: "Geometry", questions: 15, due: "Sep 4, 2026", status: "available" },
  { title: "Statistics Basics", subject: "Statistics", questions: 25, due: "Sep 6, 2026", status: "upcoming" },
];

const completed = [
  { title: "Trigonometry Basics", subject: "Trigonometry", questions: 20, due: "Aug 20, 2026", score: "17/20", status: "passed" },
  { title: "Geometry – Circles", subject: "Geometry", questions: 15, due: "Aug 15, 2026", score: "11/15", status: "passed" },
  { title: "Algebra – Quadratic Equations", subject: "Algebra", questions: 20, due: "Aug 10, 2026", score: "12/20", status: "failed" },
];

export default function StudentQuizzes({ onNavigate }: { onNavigate: (p: string) => void }) {
  const [tab, setTab] = useState("Upcoming");

  return (
    <div>
      <div className="mb-5">
        <Tabs tabs={["Upcoming", "Completed"]} active={tab} onChange={setTab} />
      </div>

      {tab === "Upcoming" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {upcoming.map((q, i) => (
            <Card key={i} className="p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1565C0] to-[#7C3AED] flex items-center justify-center text-xl text-white">📝</div>
                <Badge variant={q.status === "available" ? "success" : "warning"}>
                  {q.status === "available" ? "Available" : "Coming Soon"}
                </Badge>
              </div>
              <h3 className="font-bold text-slate-800 mb-1">{q.title}</h3>
              <p className="text-sm text-slate-500 mb-3">{q.subject}</p>
              <div className="flex justify-between text-xs text-slate-400 mb-4">
                <span>📊 {q.questions} questions</span>
                <span>📅 Due {q.due}</span>
              </div>
              <Btn
                variant={q.status === "available" ? "primary" : "secondary"}
                size="sm"
                className="w-full justify-center"
                onClick={() => q.status === "available" && onNavigate("student-quiz-attempt")}
                disabled={q.status !== "available"}
              >
                {q.status === "available" ? "Start Quiz →" : "Not Available Yet"}
              </Btn>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {completed.map((q, i) => (
            <Card key={i} className="p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl text-white ${q.status === "passed" ? "bg-green-500" : "bg-red-500"}`}>
                  {q.status === "passed" ? "✅" : "❌"}
                </div>
                <Badge variant={q.status === "passed" ? "success" : "danger"}>
                  {q.status === "passed" ? "Passed" : "Failed"}
                </Badge>
              </div>
              <h3 className="font-bold text-slate-800 mb-1">{q.title}</h3>
              <p className="text-sm text-slate-500 mb-3">{q.subject}</p>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Score: <strong className="text-slate-700">{q.score}</strong></span>
                <span>Completed: {q.due}</span>
              </div>
              <div className="mt-3">
                <Btn variant="secondary" size="sm" className="w-full justify-center" onClick={() => onNavigate("student-quiz-result")}>
                  View Results →
                </Btn>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
