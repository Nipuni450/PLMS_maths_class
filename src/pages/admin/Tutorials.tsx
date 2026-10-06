import { useState } from "react";
import { Card, Badge, Btn, Table, Modal, Input, Select } from "../../components/ui";

const tutorials = [
  { title: "Algebraic Expressions", subject: "Grade 10", date: "Aug 25, 2026", type: "PDF" },
  { title: "Geometry – Angle Rules", subject: "Grade 9", date: "Aug 22, 2026", type: "PDF" },
  { title: "Fractions & Decimals Reference", subject: "Grade 6", date: "Aug 20, 2026", type: "PDF" },
];

export default function AdminTutorials() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ title: "", subject: "", desc: "", date: "" });
  const set = (k: keyof typeof form) => (v: string) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div>
      <div className="flex justify-end mb-5">
        <Btn variant="primary" onClick={() => setShowModal(true)}>+ Add Tutorial</Btn>
      </div>

      <Card className="overflow-hidden">
        <Table
          headers={["Title", "Grade", "Date", "Type", "Actions"]}
          rows={tutorials.map((t, i) => [
            t.title,
            <Badge key={i} variant="info">{t.subject}</Badge>,
            t.date,
            <Badge key={i} variant="muted">{t.type}</Badge>,
            <div key={i} className="flex gap-1">
              <Btn variant="outline" size="sm">Edit</Btn>
              <Btn variant="danger" size="sm">Delete</Btn>
            </div>,
          ])}
        />
      </Card>

      {showModal && (
        <Modal title="Add Tutorial" onClose={() => setShowModal(false)}>
          <div className="flex flex-col gap-3">
            <Input label="Tutorial Title" value={form.title} onChange={set("title")} required />
            <Select label="Grade" value={form.subject} onChange={set("subject")} required options={[
              { value: "", label: "Select grade" },
              { value: "Grade 6", label: "Grade 6" },
              { value: "Grade 7", label: "Grade 7" },
              { value: "Grade 8", label: "Grade 8" },
              { value: "Grade 9", label: "Grade 9" },
              { value: "Grade 10", label: "Grade 10" },
              { value: "Grade 11", label: "Grade 11" },
            ]} />
            <Input label="Description" value={form.desc} onChange={set("desc")} placeholder="Brief description of this tutorial" />
            <Input label="Date" type="date" value={form.date} onChange={set("date")} required />
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Upload File / Resource</label>
              <div className="border-2 border-dashed border-[#D1DAEA] rounded-lg p-5 text-center bg-[#F0F4FF] hover:border-[#1565C0] transition cursor-pointer">
                <p className="text-2xl mb-1">📎</p>
                <p className="text-sm text-slate-600 font-medium">Click to upload or drag & drop</p>
                <p className="text-xs text-slate-400 mt-1">PDF, PPTX, DOCX up to 50MB</p>
              </div>
            </div>
            <div className="flex gap-3 mt-2">
              <Btn variant="primary" onClick={() => setShowModal(false)} className="flex-1 justify-center">Save Tutorial</Btn>
              <Btn variant="ghost" onClick={() => setShowModal(false)}>Cancel</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
