import { useState } from "react";
import { Card, Badge, Btn, Table, Select } from "../../components/ui";

const grades = [
  { student: "W.W.B.A.M.S.B. Daskon", id: "223598726", subject: "Algebra", quizAvg: 85, assignment: 88, overall: "A" },
  { student: "W.W.B.A.M.S.B. Daskon", id: "223598726", subject: "Geometry",      quizAvg: 72, assignment: 75, overall: "B" },
  { student: "S.K.K. Kumara Jr.",      id: "623605304", subject: "Algebra", quizAvg: 90, assignment: 92, overall: "A" },
  { student: "S.K.K. Kumara Jr.",      id: "623605304", subject: "Geometry",      quizAvg: 68, assignment: 70, overall: "B" },
];

const gradeColor: Record<string, any> = { A: "success", B: "info", C: "warning", D: "danger" };

export default function AdminGrades() {
  const [studentFilter, setStudentFilter] = useState("All");
  const [subjectFilter, setSubjectFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);

  const filtered = grades.filter(g =>
    (studentFilter === "All" || g.id === studentFilter) &&
    (subjectFilter === "All" || g.subject === subjectFilter)
  );

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <Select value={studentFilter} onChange={setStudentFilter} options={[
          { value: "All", label: "All Students" },
          { value: "223598726", label: "W.W.B.A.M.S.B. Daskon" },
          { value: "623605304", label: "S.K.K. Kumara Jr." },
        ]} />
        <Select value={subjectFilter} onChange={setSubjectFilter} options={[
          { value: "All", label: "All Topics" },
          { value: "Algebra", label: "Algebra" },
          { value: "Geometry", label: "Geometry" },
              { value: "Trigonometry", label: "Trigonometry" },
        ]} />
        <div className="flex-1" />
        <Btn variant="primary" onClick={() => setShowForm(s => !s)}>
          {showForm ? "Cancel" : "+ Add / Update Grade"}
        </Btn>
      </div>

      {showForm && (
        <Card className="p-5 mb-5">
          <h3 className="font-bold text-[#0D1B5E] mb-4">Add / Update Grade</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Select label="Student" value="" onChange={() => {}} options={[
              { value: "", label: "Select student" },
              { value: "223598726", label: "Daskon" },
              { value: "623605304", label: "Kumara Jr." },
            ]} />
            <Select label="Topic" value="" onChange={() => {}} options={[
              { value: "", label: "Select topic" },
              { value: "Algebra", label: "Algebra" },
              { value: "Geometry", label: "Geometry" },
              { value: "Trigonometry", label: "Trigonometry" },
            ]} />
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Quiz Average (%)</label>
              <input type="number" min="0" max="100" placeholder="85"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#D1DAEA] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#42A5F5]" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Assignment (%)</label>
              <input type="number" min="0" max="100" placeholder="88"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#D1DAEA] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#42A5F5]" />
            </div>
          </div>
          <div className="mt-4">
            <Btn variant="primary" onClick={() => setShowForm(false)}>💾 Save Grade</Btn>
          </div>
        </Card>
      )}

      <Card className="overflow-hidden">
        <Table
          headers={["Student", "Student ID", "Topic", "Quiz Avg", "Assignment", "Overall", "Action"]}
          rows={filtered.map((g, i) => [
            g.student,
            <span key={i} className="font-mono text-xs text-slate-600">{g.id}</span>,
            g.subject,
            `${g.quizAvg}%`,
            `${g.assignment}%`,
            <Badge key={i} variant={gradeColor[g.overall]}>{g.overall}</Badge>,
            <Btn key={i} variant="outline" size="sm">Edit</Btn>,
          ])}
        />
      </Card>
    </div>
  );
}
