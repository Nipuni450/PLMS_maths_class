import { useState } from "react";
import { Card, Badge, Btn, SearchBar, Table, Modal, Input, Select, Avatar } from "../../components/ui";
import { GRADE_OPTIONS } from "../../config";

const initialStudents = [
  { id: "223598726", name: "W.W.B.A.M.S.B. Daskon", email: "daskon@plms.lk", phone: "+94 77 235 9872", grade: "Grade 10", status: "Active" },
  { id: "623605304", name: "S.K.K. Kumara Jr.", email: "kumara@plms.lk", phone: "+94 76 360 5304", grade: "Grade 9", status: "Active" },
  { id: "123599055", name: "M.N.F. Raheema", email: "raheema@plms.lk", phone: "+94 71 359 9055", grade: "Grade 11", status: "Active" },
  { id: "623595900", name: "D.M.N.S. Dissanayake", email: "dissanayake@plms.lk", phone: "+94 76 359 5900", grade: "Grade 7", status: "Inactive" },
];

export default function AdminStudents() {
  const [search, setSearch] = useState("");
  const [students, setStudents] = useState(initialStudents);
  const [showModal, setShowModal] = useState(false);
  const [editStudent, setEditStudent] = useState<(typeof initialStudents)[0] | null>(null);
  const [form, setForm] = useState({ id: "", name: "", email: "", phone: "", grade: "Grade 6", status: "Active" });
  const set = (k: keyof typeof form) => (v: string) => setForm(f => ({ ...f, [k]: v }));

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.id.includes(search) || s.email.toLowerCase().includes(search.toLowerCase())
  );

  const openAdd = () => { setForm({ id: "", name: "", email: "", phone: "", grade: "Grade 6", status: "Active" }); setEditStudent(null); setShowModal(true); };
  const openEdit = (s: typeof initialStudents[0]) => { setForm({ ...s }); setEditStudent(s); setShowModal(true); };
  const deleteStudent = (id: string) => setStudents(s => s.filter(x => x.id !== id));
  const save = () => {
    if (editStudent) setStudents(s => s.map(x => x.id === editStudent.id ? form : x));
    else setStudents(s => [...s, form]);
    setShowModal(false);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="flex-1"><SearchBar value={search} onChange={setSearch} placeholder="Search by name, ID or email..." /></div>
        <Btn variant="primary" onClick={openAdd}>+ Add Student</Btn>
      </div>

      <Card className="overflow-hidden">
        <Table
          headers={["Student ID", "Name", "Grade", "Email", "Phone", "Status", "Actions"]}
          rows={filtered.map(s => [
            <span key={s.id} className="font-mono text-xs text-slate-600">{s.id}</span>,
            <div key={s.id} className="flex items-center gap-2"><Avatar name={s.name} size="sm" /><span className="font-medium text-sm">{s.name}</span></div>,
            <Badge key={s.id} variant="info">{s.grade}</Badge>,
            s.email,
            s.phone,
            <Badge key={s.id} variant={s.status === "Active" ? "success" : "muted"}>{s.status}</Badge>,
            <div key={s.id} className="flex gap-1">
              <Btn variant="outline" size="sm" onClick={() => openEdit(s)}>Edit</Btn>
              <Btn variant="danger" size="sm" onClick={() => deleteStudent(s.id)}>Delete</Btn>
            </div>,
          ])}
        />
      </Card>

      {showModal && (
        <Modal title={editStudent ? "Edit Student" : "Add Student"} onClose={() => setShowModal(false)}>
          <div className="flex flex-col gap-3">
            <Input label="Full Name" value={form.name} onChange={set("name")} required />
            <Input label="Student ID" value={form.id} onChange={set("id")} required />
            <Select label="Grade" value={form.grade} onChange={set("grade")} options={GRADE_OPTIONS} required />
            <Input label="Email" type="email" value={form.email} onChange={set("email")} required />
            <Input label="Phone" value={form.phone} onChange={set("phone")} required />
            <div className="flex gap-3 mt-2">
              <Btn variant="primary" onClick={save} className="flex-1 justify-center">
                {editStudent ? "Save Changes" : "Add Student"}
              </Btn>
              <Btn variant="ghost" onClick={() => setShowModal(false)}>Cancel</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
