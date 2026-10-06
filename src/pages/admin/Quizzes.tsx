import { useState } from "react";
import { Card, Badge, Btn, Table } from "../../components/ui";

const quizzes = [
  { title: "Algebra – Linear Equations", subject: "Grade 10", questions: 20, due: "Sep 2, 2026", status: "Published" },
  { title: "Geometry – Angles & Triangles", subject: "Grade 9", questions: 15, due: "Sep 4, 2026", status: "Published" },
  { title: "Fractions & Decimals Quiz", subject: "Grade 6", questions: 25, due: "Sep 6, 2026", status: "Draft" },
  { title: "Trigonometry Basics", subject: "Grade 10", questions: 20, due: "Aug 20, 2026", status: "Closed" },
];

export default function AdminQuizzes({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <div>
      <div className="flex justify-end mb-5">
        <Btn variant="primary" onClick={() => onNavigate("admin-create-quiz")}>+ Create Quiz</Btn>
      </div>

      <Card className="overflow-hidden">
        <Table
          headers={["Quiz Title", "Subject", "Questions", "Due Date", "Status", "Actions"]}
          rows={quizzes.map((q, i) => [
            <span key={i} className="font-medium">{q.title}</span>,
            <Badge key={i} variant="info">{q.subject}</Badge>,
            q.questions,
            q.due,
            <Badge key={i} variant={q.status === "Published" ? "success" : q.status === "Draft" ? "warning" : "muted"}>{q.status}</Badge>,
            <div key={i} className="flex gap-1">
              <Btn variant="outline" size="sm">Edit</Btn>
              <Btn variant="danger" size="sm">Delete</Btn>
            </div>,
          ])}
        />
      </Card>
    </div>
  );
}
