import { useState } from "react";
import { Card, Input, Select, Btn } from "../../components/ui";

interface Question { text: string; options: string[]; correct: number; }

export default function CreateQuiz({ onNavigate }: { onNavigate: (p: string) => void }) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [desc, setDesc] = useState("");
  const [questions, setQuestions] = useState<Question[]>([
    { text: "", options: ["", "", "", ""], correct: 0 },
  ]);

  const addQuestion = () =>
    setQuestions(q => [...q, { text: "", options: ["", "", "", ""], correct: 0 }]);

  const updateQuestion = (qi: number, field: "text" | "correct", value: string | number) =>
    setQuestions(q => q.map((qx, i) => i === qi ? { ...qx, [field]: value } : qx));

  const updateOption = (qi: number, oi: number, value: string) =>
    setQuestions(q => q.map((qx, i) => i === qi ? { ...qx, options: qx.options.map((o, j) => j === oi ? value : o) } : qx));

  const removeQuestion = (qi: number) =>
    setQuestions(q => q.filter((_, i) => i !== qi));

  return (
    <div className="max-w-3xl mx-auto">
      {/* Quiz meta */}
      <Card className="p-6 mb-5">
        <h3 className="font-bold text-[#0D1B5E] mb-4">Quiz Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <Input label="Quiz Title" value={title} onChange={setTitle} placeholder="e.g. Algebra – Linear Equations Quiz" required />
          </div>
          <Select label="Grade" value={subject} onChange={setSubject} required options={[
            { value: "", label: "Select grade" },
            { value: "Grade 6", label: "Grade 6" },
              { value: "Grade 7", label: "Grade 7" },
              { value: "Grade 8", label: "Grade 8" },
              { value: "Grade 9", label: "Grade 9" },
              { value: "Grade 10", label: "Grade 10" },
              { value: "Grade 11", label: "Grade 11" },
          ]} />
          <Input label="Description" value={desc} onChange={setDesc} placeholder="Brief description..." />
        </div>
      </Card>

      {/* Questions */}
      <div className="flex flex-col gap-4 mb-5">
        {questions.map((q, qi) => (
          <Card key={qi} className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-[#1565C0]">Question {qi + 1}</span>
              {questions.length > 1 && (
                <button onClick={() => removeQuestion(qi)} className="text-xs text-red-500 hover:underline cursor-pointer">Remove</button>
              )}
            </div>
            <Input
              label="Question Text"
              value={q.text}
              onChange={v => updateQuestion(qi, "text", v)}
              placeholder="Enter the question..."
              required
            />
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {q.options.map((opt, oi) => (
                <div key={oi} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`correct-${qi}`}
                    checked={q.correct === oi}
                    onChange={() => updateQuestion(qi, "correct", oi)}
                    className="w-4 h-4 accent-[#1565C0] cursor-pointer flex-shrink-0"
                  />
                  <input
                    type="text"
                    value={opt}
                    onChange={e => updateOption(qi, oi, e.target.value)}
                    placeholder={`Option ${String.fromCharCode(65 + oi)}`}
                    className="flex-1 px-3 py-2 rounded-lg border border-[#D1DAEA] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#42A5F5]"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-2">● Select the radio button next to the correct answer</p>
          </Card>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Btn variant="secondary" onClick={addQuestion}>+ Add Question</Btn>
        <div className="flex-1" />
        <Btn variant="ghost" onClick={() => onNavigate("admin-quizzes")}>Cancel</Btn>
        <Btn variant="outline" onClick={() => onNavigate("admin-quizzes")}>💾 Save Draft</Btn>
        <Btn variant="primary" onClick={() => onNavigate("admin-quizzes")}>📤 Publish Quiz</Btn>
      </div>
    </div>
  );
}
