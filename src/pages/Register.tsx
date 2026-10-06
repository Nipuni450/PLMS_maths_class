import { useState } from "react";
import Logo from "../components/Logo";
import { Btn, Input, Select } from "../components/ui";
import { GRADE_OPTIONS } from "../config";

export default function Register({ onNavigate }: { onNavigate: (p: string) => void }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "", studentId: "", grade: "", password: "", confirm: "",
  });
  const set = (k: keyof typeof form) => (v: string) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div className="min-h-full bg-[#F0F4FF] flex items-center justify-center p-6">
      <div className="w-full max-w-xl">
        <div className="bg-white rounded-2xl shadow-sm border border-[#D1DAEA] p-8">
          <div className="flex justify-center mb-6">
            <Logo size="md" />
          </div>
          <h1 className="text-2xl font-bold text-[#0D1B5E] mb-1 text-center">Student Registration</h1>
          <p className="text-slate-500 text-sm text-center mb-7">Register for the Mathematics class (Grades 6 to 11) – Rs. 1,500 per month</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <Input label="Full Name" value={form.name} onChange={set("name")} placeholder="W.W.B.A.M.S.B. Daskon" required />
            </div>
            <Input label="Email Address" type="email" value={form.email} onChange={set("email")} placeholder="student@plms.lk" required />
            <Input label="Phone Number" type="tel" value={form.phone} onChange={set("phone")} placeholder="+94 77 123 4567" required />
            <div className="sm:col-span-2">
              <Input label="Address" value={form.address} onChange={set("address")} placeholder="No. 12, Galle Road, Colombo" required />
            </div>
            <Input label="Student ID" value={form.studentId} onChange={set("studentId")} placeholder="223598726" required />
            <Select label="Grade" value={form.grade} onChange={set("grade")} options={[{ value: "", label: "Select your grade" }, ...GRADE_OPTIONS]} required />
            <Input label="Password" type="password" value={form.password} onChange={set("password")} placeholder="Min. 8 characters" required />
            <Input label="Confirm Password" type="password" value={form.confirm} onChange={set("confirm")} placeholder="Re-enter password" required />
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <Btn variant="primary" size="lg" onClick={() => onNavigate("login")} className="w-full justify-center">
              📝 Create Account
            </Btn>
            <Btn variant="ghost" size="md" onClick={() => onNavigate("login")} className="w-full justify-center text-slate-500">
              ← Back to Login
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
