import { useState } from "react";
import { Card, StatCard, Badge, Btn, Table, Modal, Input, Select } from "../../components/ui";

const payments = [
  { desc: "August 2026 Class Fee", amount: "Rs. 1,500", due: "Aug 31, 2026", status: "Pending" },
  { desc: "July 2026 Class Fee",   amount: "Rs. 1,500", due: "Jul 31, 2026", status: "Paid" },
  { desc: "June 2026 Class Fee",   amount: "Rs. 1,500", due: "Jun 30, 2026", status: "Paid" },
  { desc: "May 2026 Class Fee",        amount: "Rs. 1,500", due: "May 31, 2026", status: "Rejected" },
];

const statusBadge: Record<string, "success" | "warning" | "danger"> = {
  Paid: "success", Pending: "warning", Rejected: "danger",
};

export default function StudentPayments({ onNavigate }: { onNavigate: (p: string) => void }) {
  const [showUpload, setShowUpload] = useState(false);
  const [form, setForm] = useState({ type: "", amount: "", date: "", ref: "" });
  const set = (k: keyof typeof form) => (v: string) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total Due" value="Rs. 1,500" icon="💳" color="red" />
        <StatCard label="Paid Amount" value="Rs. 3,000" icon="✅" color="green" />
        <StatCard label="Pending" value="Rs. 1,500" icon="⏳" color="amber" />
        <StatCard label="Last Payment" value="Jul 28" icon="📅" sub="Rs. 1,500" color="navy" />
      </div>

      <Card className="overflow-hidden mb-6">
        <div className="px-5 py-4 border-b border-[#EEF2FB] flex items-center justify-between">
          <h3 className="font-bold text-[#0D1B5E]">Payment Overview</h3>
          <Btn variant="primary" size="sm" onClick={() => setShowUpload(true)}>⬆ Upload Slip</Btn>
        </div>
        <Table
          headers={["Description", "Amount", "Due Date", "Status", "Action"]}
          rows={payments.map(p => [
            p.desc,
            p.amount,
            p.due,
            <Badge key={p.desc} variant={statusBadge[p.status]}>{p.status}</Badge>,
            p.status === "Pending"
              ? <Btn key={p.desc} variant="secondary" size="sm" onClick={() => setShowUpload(true)}>Upload Slip</Btn>
              : <button key={p.desc} onClick={() => onNavigate("student-payment-history")} className="text-xs text-[#1565C0] hover:underline cursor-pointer">View History</button>,
          ])}
        />
      </Card>

      {showUpload && (
        <Modal title="Upload Payment Slip" onClose={() => setShowUpload(false)}>
          <div className="flex flex-col gap-4">
            <Select label="Payment / Fee Type" value={form.type} onChange={set("type")} options={[
              { value: "", label: "Select fee type" },
              { value: "tuition", label: "Monthly Class Fee" },
            ]} required />
            <Input label="Amount (Rs.)" value={form.amount} onChange={set("amount")} placeholder="1500" required />
            <Input label="Payment Date" type="date" value={form.date} onChange={set("date")} required />
            <Input label="Transaction / Reference Number" value={form.ref} onChange={set("ref")} placeholder="TRX-2026-XXXXXX" required />
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Upload Payment Slip <span className="text-red-500">*</span></label>
              <div className="border-2 border-dashed border-[#D1DAEA] rounded-lg p-6 text-center bg-[#F0F4FF] hover:border-[#1565C0] transition cursor-pointer">
                <p className="text-3xl mb-2">📎</p>
                <p className="text-sm text-slate-600 font-medium">Click to upload or drag & drop</p>
                <p className="text-xs text-slate-400 mt-1">PNG, JPG, PDF up to 5MB</p>
              </div>
            </div>
            <Btn variant="primary" className="w-full justify-center" onClick={() => setShowUpload(false)}>
              📤 Submit Payment
            </Btn>
          </div>
        </Modal>
      )}
    </div>
  );
}
