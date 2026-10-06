import { Card, StatCard, Badge } from "../../components/ui";

export default function ParentPaymentDetails() {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="Current Due" value="Rs. 1,500" icon="💳" color="red" />
        <StatCard label="Paid Amount" value="Rs. 3,000" icon="✅" color="green" />
        <StatCard label="Pending" value="Rs. 1,500" icon="⏳" color="amber" />
        <StatCard label="Due Date" value="Aug 31" icon="📅" sub="2026" color="navy" />
      </div>

      <Card className="p-6">
        <h3 className="font-bold text-[#0D1B5E] mb-5">Current Payment Status</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { label: "Student Name", value: "W.W.B.A.M.S.B. Daskon" },
            { label: "Student ID", value: "223598726" },
            { label: "Fee Type", value: "Monthly Class Fee" },
            { label: "Amount Due", value: "Rs. 1,500.00" },
            { label: "Due Date", value: "August 31, 2026" },
            { label: "Payment Status", value: <Badge variant="warning">Pending</Badge> },
            { label: "Last Payment", value: "July 28, 2026 – Rs. 1,500" },
            { label: "Payment Method", value: "Bank Transfer" },
          ].map(f => (
            <div key={f.label} className="bg-[#F0F4FF] rounded-xl p-4">
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-1">{f.label}</p>
              <div className="text-sm font-semibold text-slate-800">{f.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
          <p className="text-sm text-amber-800 font-medium">⚠ Payment Reminder</p>
          <p className="text-xs text-amber-700 mt-1">August 2026 class fee of Rs. 1,500 is pending. Please ensure the payment is submitted before August 31, 2026.</p>
        </div>
      </Card>
    </div>
  );
}
