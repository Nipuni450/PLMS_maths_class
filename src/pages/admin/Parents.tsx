import { useState } from "react";
import { Card, Badge, Btn, SearchBar, Table, Modal, Input, Avatar } from "../../components/ui";

const initialParents = [
  { name: "Mr. W.B. Daskon (Sr.)", email: "daskon.parent@gmail.com", phone: "+94 77 111 2222", linked: "223598726 – W.W.B.A.M.S.B. Daskon", status: "Active" },
  { name: "Mrs. P.K. Fernando",    email: "fernando.parent@gmail.com", phone: "+94 76 333 4444", linked: "623605304 – S.K.K. Kumara Jr.", status: "Active" },
  { name: "Mr. N.F. Raheema",      email: "raheema.parent@gmail.com", phone: "+94 71 555 6666", linked: "123599055 – M.N.F. Raheema", status: "Active" },
];

export default function AdminParents() {
  const [search, setSearch] = useState("");
  const [parents] = useState(initialParents);
  const [showModal, setShowModal] = useState(false);
  const [showLink, setShowLink] = useState(false);

  const filtered = parents.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) || p.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="flex-1"><SearchBar value={search} onChange={setSearch} placeholder="Search parents..." /></div>
        <Btn variant="secondary" onClick={() => setShowLink(true)}>🔗 Link Parent</Btn>
        <Btn variant="primary" onClick={() => setShowModal(true)}>+ Add Parent</Btn>
      </div>

      <Card className="overflow-hidden">
        <Table
          headers={["Name", "Email", "Phone", "Linked Student", "Status", "Actions"]}
          rows={filtered.map((p, i) => [
            <div key={i} className="flex items-center gap-2"><Avatar name={p.name} size="sm" /><span className="font-medium text-sm">{p.name}</span></div>,
            p.email,
            p.phone,
            <span key={i} className="text-xs text-slate-600">{p.linked}</span>,
            <Badge key={i} variant="success">{p.status}</Badge>,
            <div key={i} className="flex gap-1">
              <Btn variant="outline" size="sm">Edit</Btn>
              <Btn variant="danger" size="sm">Delete</Btn>
            </div>,
          ])}
        />
      </Card>

      {showModal && (
        <Modal title="Add Parent" onClose={() => setShowModal(false)}>
          <div className="flex flex-col gap-3">
            <Input label="Full Name" value="" onChange={() => {}} required />
            <Input label="Email" type="email" value="" onChange={() => {}} required />
            <Input label="Phone" value="" onChange={() => {}} required />
            <div className="flex gap-3 mt-2">
              <Btn variant="primary" onClick={() => setShowModal(false)} className="flex-1 justify-center">Add Parent</Btn>
              <Btn variant="ghost" onClick={() => setShowModal(false)}>Cancel</Btn>
            </div>
          </div>
        </Modal>
      )}

      {showLink && (
        <Modal title="Link Parent to Student" onClose={() => setShowLink(false)}>
          <p className="text-sm text-slate-500 mb-4">Select a parent and student to link their accounts.</p>
          <div className="flex flex-col gap-3">
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Select Parent</label>
              <select className="w-full px-3.5 py-2.5 rounded-lg border border-[#D1DAEA] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#42A5F5]">
                {parents.map(p => <option key={p.email}>{p.name}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Select Student</label>
              <select className="w-full px-3.5 py-2.5 rounded-lg border border-[#D1DAEA] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#42A5F5]">
                <option>223598726 – W.W.B.A.M.S.B. Daskon</option>
                <option>623605304 – S.K.K. Kumara Jr.</option>
              </select>
            </div>
            <div className="flex gap-3 mt-2">
              <Btn variant="primary" onClick={() => setShowLink(false)} className="flex-1 justify-center">✅ Confirm Link</Btn>
              <Btn variant="ghost" onClick={() => setShowLink(false)}>Cancel</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
