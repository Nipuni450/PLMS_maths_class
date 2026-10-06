import { useState } from "react";
import { Card, Badge, Btn, Table, Modal, Input, Select } from "../../components/ui";

const classes = [
  { title: "Algebra – Ch. 6", subject: "Grade 10", date: "Aug 29, 2026", time: "10:00 AM", link: "https://zoom.us/j/example", status: "Upcoming" },
  { title: "Geometry Rev.", subject: "Grade 9", date: "Aug 30, 2026", time: "2:00 PM", link: "https://zoom.us/j/example", status: "Upcoming" },
  { title: "Fractions & Decimals", subject: "Grade 6", date: "Sep 1, 2026", time: "9:00 AM", link: "https://zoom.us/j/example", status: "Upcoming" },
  { title: "Trigonometry", subject: "Grade 10", date: "Aug 22, 2026", time: "10:00 AM", link: "https://zoom.us/j/example", status: "Completed" },
];

export default function AdminClasses() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ title: "", subject: "", date: "", time: "", link: "" });
  const set = (k: keyof typeof form) => (v: string) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div>
      <div className="flex justify-end mb-5">
        <Btn variant="primary" onClick={() => setShowModal(true)}>+ Add Zoom Class</Btn>
      </div>

      <Card className="overflow-hidden">
        <Table
          headers={["Title", "Grade", "Date", "Time", "Status", "Actions"]}
          rows={classes.map((c, i) => [
            c.title,
            <Badge key={i} variant="info">{c.subject}</Badge>,
            c.date,
            c.time,
            <Badge key={i} variant={c.status === "Upcoming" ? "warning" : "muted"}>{c.status}</Badge>,
            <div key={i} className="flex gap-1">
              <Btn variant="outline" size="sm">Edit</Btn>
              <Btn variant="danger" size="sm">Delete</Btn>
            </div>,
          ])}
        />
      </Card>

      {showModal && (
        <Modal title="Add Zoom Class" onClose={() => setShowModal(false)}>
          <div className="flex flex-col gap-3">
            <Input label="Class Title" value={form.title} onChange={set("title")} required />
            <Select label="Grade" value={form.subject} onChange={set("subject")} required options={[
              { value: "", label: "Select grade" },
              { value: "Grade 6", label: "Grade 6" },
              { value: "Grade 7", label: "Grade 7" },
              { value: "Grade 8", label: "Grade 8" },
              { value: "Grade 9", label: "Grade 9" },
              { value: "Grade 10", label: "Grade 10" },
              { value: "Grade 11", label: "Grade 11" },
            ]} />
            <Input label="Date" type="date" value={form.date} onChange={set("date")} required />
            <Input label="Time" type="time" value={form.time} onChange={set("time")} required />
            <Input label="Zoom Link" type="url" value={form.link} onChange={set("link")} placeholder="https://zoom.us/j/..." required />
            <div className="flex gap-3 mt-2">
              <Btn variant="primary" onClick={() => setShowModal(false)} className="flex-1 justify-center">Save Class</Btn>
              <Btn variant="ghost" onClick={() => setShowModal(false)}>Cancel</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
