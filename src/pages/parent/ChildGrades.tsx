import { useState } from "react";
import { Card, Select, Badge, Table } from "../../components/ui";

const grades = [
  { subject: "Algebra", quizAvg: "85%", assignment: "88%", overall: "A" },
  { subject: "Geometry",     quizAvg: "72%", assignment: "75%", overall: "B" },
  { subject: "Trigonometry",   quizAvg: "60%", assignment: "65%", overall: "C" },
];

const gradeColor: Record<string, any> = { A: "success", B: "info", C: "warning", D: "danger", F: "danger" };

export default function ChildGrades() {
  const [term, setTerm] = useState("Term 3 – 2026");

  return (
    <div>
      <div className="flex justify-end mb-5">
        <div className="w-52">
          <Select value={term} onChange={setTerm} options={[
            { value: "Term 3 – 2026", label: "Term 3 – 2026" },
            { value: "Term 2 – 2026", label: "Term 2 – 2026" },
          ]} />
        </div>
      </div>

      {/* Subject cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {grades.map(g => (
          <Card key={g.subject} className="p-5 text-center">
            <div className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center text-2xl font-bold text-white mb-3
              ${g.overall === "A" ? "bg-green-500" : g.overall === "B" ? "bg-blue-500" : "bg-amber-500"}`}>
              {g.overall}
            </div>
            <h3 className="font-bold text-slate-800">{g.subject}</h3>
            <p className="text-sm text-slate-500 mt-1">Quiz avg: {g.quizAvg}</p>
            <p className="text-sm text-slate-500">Assignment: {g.assignment}</p>
          </Card>
        ))}
      </div>

      {/* Progress bars */}
      <Card className="p-5 mb-6">
        <h3 className="font-bold text-[#0D1B5E] mb-4">Grade Trend</h3>
        <div className="flex flex-col gap-4">
          {grades.map(g => (
            <div key={g.subject}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="font-medium text-slate-700">{g.subject}</span>
                <span className="font-bold text-[#1565C0]">{g.quizAvg}</span>
              </div>
              <div className="h-3 bg-[#EEF2FB] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#1565C0] to-[#7C3AED] rounded-full"
                  style={{ width: g.quizAvg }} />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Grade table */}
      <Card className="overflow-hidden">
        <Table
          headers={["Topic", "Quiz Average", "Assignment", "Overall Grade"]}
          rows={grades.map(g => [
            g.subject, g.quizAvg, g.assignment,
            <Badge key={g.subject} variant={gradeColor[g.overall]}>{g.overall}</Badge>,
          ])}
        />
      </Card>
    </div>
  );
}
