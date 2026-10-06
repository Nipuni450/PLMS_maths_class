import { useState } from "react";
import { Card, Badge, Btn, Table, Modal, Input, Select } from "../../components/ui";

const recordings = [
  { title: "Algebra – Ch. 5 Equations", subject: "Grade 10", date: "Aug 27, 2026", status: "Published" },
  { title: "Geometry – Angles & Triangles", subject: "Grade 9", date: "Aug 25, 2026", status: "Published" },
  { title: "Fractions – Overview", subject: "Grade 6", date: "Aug 23, 2026", status: "Draft" },
];

export default function AdminRecordings() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ title: "", subject: "", date: "" });
  const set = (k: keyof typeof form) => (v: string) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div>
      <div className="flex justify-end mb-5">
        <Btn variant="primary" onClick={() => setShowModal(true)}>⬆ Upload Recording</Btn>
      </div>

      <Card className="overflow-hidden">
        <Table
          headers={["Title", "Grade", "Date", "Status", "Actions"]}
          rows={recordings.map((r, i) => [
            r.title,
            <Badge key={i} variant="info">{r.subject}</Badge>,
            r.date,
            <Badge key={i} variant={r.status === "Published" ? "success" : "warning"}>{r.status}</Badge>,
            <div key={i} className="flex gap-1">
              <Btn variant="outline" size="sm">Edit</Btn>
              <Btn variant="danger" size="sm">Delete</Btn>
            </div>,
          ])}
        />
      </Card>

      {showModal && (
        <Modal title="Upload Recording" onClose={() => setShowModal(false)}>
          <div className="flex flex-col gap-3">
            <Input label="Recording Title" value={form.title} onChange={set("title")} required />
            <Select label="Grade" value={form.subject} onChange={set("subject")} required options={[
              { value: "", label: "Select grade" },
              { value: "Grade 6", label: "Grade 6" },
              { value: "Grade 7", label: "Grade 7" },
              { value: "Grade 8", label: "Grade 8" },
              { value: "Grade 9", label: "Grade 9" },
              { value: "Grade 10", label: "Grade 10" },
              { value: "Grade 11", label: "Grade 11" },
            ]} />
            <Input label="Recording Date" type="date" value={form.date} onChange={set("date")} required />
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Video / Link</label>
              <div className="border-2 border-dashed border-[#D1DAEA] rounded-lg p-5 text-center bg-[#F0F4FF] hover:border-[#1565C0] transition cursor-pointer">
                <p className="text-2xl mb-1">🎬</p>
                <p className="text-sm text-slate-600 font-medium">Upload video file or paste link</p>
                <p className="text-xs text-slate-400 mt-1">MP4, MOV up to 2GB · or YouTube/Zoom link</p>
              </div>
            </div>
            <div className="flex gap-3 mt-2">
              <Btn variant="primary" onClick={() => setShowModal(false)} className="flex-1 justify-center">Save Recording</Btn>
              <Btn variant="ghost" onClick={() => setShowModal(false)}>Cancel</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
