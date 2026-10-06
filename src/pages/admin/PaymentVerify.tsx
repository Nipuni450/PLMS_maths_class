import { useState } from "react";
import { Card, Btn, Badge, Modal, Input } from "../../components/ui";

export default function PaymentVerify({ onNavigate }: { onNavigate: (p: string) => void }) {
  const [showReject, setShowReject] = useState(false);
  const [reason, setReason] = useState("");

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-6 mb-5">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#E8EFF9] flex items-center justify-center text-2xl">👤</div>
          <div>
            <h2 className="text-lg font-bold text-[#0D1B5E]">Payment Verification</h2>
            <p className="text-sm text-slate-500">W.W.B.A.M.S.B. Daskon · ID: 223598726</p>
          </div>
          <div className="ml-auto"><Badge variant="warning">Pending Review</Badge></div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-5">
          {[
            { label: "Fee Type", value: "Monthly Class Fee" },
            { label: "Amount", value: "Rs. 1,500.00" },
            { label: "Payment Date", value: "August 29, 2026" },
            { label: "Reference Number", value: "TRX-2026-0829-001" },
            { label: "Submitted On", value: "Aug 29, 2026 · 9:14 AM" },
            { label: "Payment Method", value: "Bank Transfer" },
          ].map(f => (
            <div key={f.label} className="bg-[#F0F4FF] rounded-xl p-4">
              <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">{f.label}</p>
              <p className="text-sm font-semibold text-slate-800">{f.value}</p>
            </div>
          ))}
        </div>

        {/* Slip preview */}
        <div className="mb-6">
          <p className="text-sm font-medium text-slate-700 mb-2">Payment Slip</p>
          <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl border border-[#D1DAEA] flex items-center justify-center">
            <div className="text-center">
              <p className="text-5xl mb-2">📄</p>
              <p className="text-sm text-slate-500">payment-slip-aug2026.pdf</p>
              <button className="text-xs text-[#1565C0] hover:underline mt-1 cursor-pointer">Click to preview</button>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Btn variant="primary" className="flex-1 justify-center" size="lg"
            onClick={() => onNavigate("admin-payments")}>
            ✅ Approve Payment
          </Btn>
          <Btn variant="danger" size="lg" onClick={() => setShowReject(true)}>
            ❌ Reject
          </Btn>
          <Btn variant="ghost" onClick={() => onNavigate("admin-payments")}>← Back</Btn>
        </div>
      </Card>

      {showReject && (
        <Modal title="Reject Payment" onClose={() => setShowReject(false)}>
          <p className="text-sm text-slate-500 mb-4">Please provide a reason for rejection. This will be shown to the student.</p>
          <Input
            label="Rejection Reason"
            value={reason}
            onChange={setReason}
            placeholder="e.g. Invalid payment slip, amount mismatch..."
            required
          />
          <div className="flex gap-3 mt-4">
            <Btn variant="danger" className="flex-1 justify-center" onClick={() => { setShowReject(false); onNavigate("admin-payments"); }}>
              Confirm Rejection
            </Btn>
            <Btn variant="ghost" onClick={() => setShowReject(false)}>Cancel</Btn>
          </div>
        </Modal>
      )}
    </div>
  );
}
