import { useState } from "react";
import { Card, StatCard, Select, Badge, Table } from "../../components/ui";

const grades = [
  { subject: "Algebra", quizAvg: "85%", assignment: "88%", overall: "A" },
  { subject: "Geometry",     quizAvg: "72%", assignment: "75%", overall: "B" },
  { subject: "Trigonometry",   quizAvg: "60%", assignment: "65%", overall: "C" },
];

const gradeColor: Record<string, string> = {
  A: "success", B: "info", C: "warning", D: "danger", F: "danger",
};

const progressBars = [
  { subject: "Algebra", pct: 86 },
  { subject: "Geometry", pct: 73 },
  { subject: "Trigonometry", pct: 62 },
];

export default function StudentGrades() {
  const [term, setTerm] = useState("Term 3 – 2026");

  return (
    <div>
      <div className="flex justify-end mb-5">
        <div className="w-52">
          <Select value={term} onChange={setTerm} options={[
            { value: "Term 3 – 2026", label: "Term 3 – 2026" },
            { value: "Term 2 – 2026", label: "Term 2 – 2026" },
            { value: "Term 1 – 2026", label: "Term 1 – 2026" },
          ]} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <StatCard label="Overall Average" value="74%" icon="📊" sub={term} color="navy" />
        <StatCard label="Best Topic" value="Algebra" icon="🥇" sub="86% average" color="blue" />
        <StatCard label="Total Quizzes" value={9} icon="📝" sub="Completed" color="purple" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Progress bars */}
        <Card className="p-5">
          <h3 className="font-bold text-[#0D1B5E] mb-4">Topic Progress</h3>
          <div className="flex flex-col gap-5">
            {progressBars.map(s => (
              <div key={s.subject}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium text-slate-700">{s.subject}</span>
                  <span className="font-bold text-[#1565C0]">{s.pct}%</span>
                </div>
                <div className="h-3 bg-[#EEF2FB] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#1565C0] to-[#7C3AED] rounded-full transition-all"
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Subject cards */}
        <Card className="p-5">
          <h3 className="font-bold text-[#0D1B5E] mb-4">Grade Summary</h3>
          <div className="flex flex-col gap-3">
            {grades.map(g => (
              <div key={g.subject} className="flex items-center justify-between p-3 rounded-xl bg-[#F0F4FF]">
                <p className="font-semibold text-sm text-slate-800">{g.subject}</p>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span>Quiz: {g.quizAvg}</span>
                  <span>Assign: {g.assignment}</span>
                  <Badge variant={gradeColor[g.overall] as any}>{g.overall}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Grade table */}
      <Card className="overflow-hidden">
        <div className="px-5 py-4 border-b border-[#EEF2FB]">
          <h3 className="font-bold text-[#0D1B5E]">Detailed Grade Table</h3>
        </div>
        <Table
          headers={["Topic", "Quiz Average", "Assignment", "Overall Grade"]}
          rows={grades.map(g => [
            g.subject,
            g.quizAvg,
            g.assignment,
            <Badge key={g.subject} variant={gradeColor[g.overall] as any}>{g.overall}</Badge>,
          ])}
        />
      </Card>
    </div>
  );
}
