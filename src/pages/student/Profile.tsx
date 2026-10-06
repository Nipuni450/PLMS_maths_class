import { useState } from "react";
import { Card, Input, Btn, Avatar, Select } from "../../components/ui";
import { GRADE_OPTIONS } from "../../config";

export default function StudentProfile() {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: "W.W.B.A.M.S.B. Daskon", email: "daskon@plms.lk", phone: "+94 77 235 9872",
    address: "No. 45, Temple Road, Kandy", studentId: "223598726", grade: "Grade 10",
  });
  const set = (k: keyof typeof form) => (v: string) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div className="max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile picture */}
        <Card className="p-6 flex flex-col items-center text-center md:col-span-1">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1565C0] to-[#7C3AED] flex items-center justify-center text-white text-4xl font-bold mb-4">
            D
          </div>
          <h3 className="font-bold text-[#0D1B5E]">{form.name}</h3>
          <p className="text-sm text-slate-500 mb-1">Student ID: {form.studentId}</p>
          <p className="text-sm text-slate-500 mb-1">{form.grade} · Mathematics</p>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 mt-1">Active</span>
          <button className="mt-4 text-xs text-[#1565C0] hover:underline cursor-pointer">📷 Change Photo</button>
        </Card>

        {/* Profile form */}
        <Card className="p-6 md:col-span-2">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-[#0D1B5E]">Personal Information</h3>
            <Btn variant={editing ? "secondary" : "outline"} size="sm" onClick={() => setEditing(e => !e)}>
              {editing ? "Cancel" : "✏️ Edit Profile"}
            </Btn>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <Input label="Full Name" value={form.name} onChange={set("name")} placeholder="" />
            </div>
            <Input label="Student ID" value={form.studentId} onChange={set("studentId")} />
            <Select label="Grade" value={form.grade} onChange={set("grade")} options={GRADE_OPTIONS} />
            <Input label="Email Address" type="email" value={form.email} onChange={set("email")} />
            <Input label="Phone Number" value={form.phone} onChange={set("phone")} />
            <div className="sm:col-span-2">
              <Input label="Address" value={form.address} onChange={set("address")} />
            </div>
          </div>
          {editing && (
            <div className="mt-5 flex gap-3">
              <Btn variant="primary" onClick={() => setEditing(false)}>💾 Save Changes</Btn>
              <Btn variant="ghost" onClick={() => setEditing(false)}>Cancel</Btn>
            </div>
          )}
        </Card>
      </div>

      {/* Change Password */}
      <Card className="mt-6 p-6">
        <h3 className="font-bold text-[#0D1B5E] mb-5">Change Password</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Input label="Current Password" type="password" value="" onChange={() => {}} placeholder="••••••••" />
          <Input label="New Password" type="password" value="" onChange={() => {}} placeholder="••••••••" />
          <Input label="Confirm New Password" type="password" value="" onChange={() => {}} placeholder="••••••••" />
        </div>
        <div className="mt-4">
          <Btn variant="primary">🔒 Update Password</Btn>
        </div>
      </Card>
    </div>
  );
}
