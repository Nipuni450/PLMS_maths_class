import { Card, StatCard, Badge, Btn, Table } from "../../components/ui";

const payments = [
  { student: "W.W.B.A.M.S.B. Daskon", desc: "August Class Fee", amount: "Rs. 1,500", date: "Aug 29, 2026", status: "Pending" },
  { student: "A.K. Fernando",          desc: "August Class Fee", amount: "Rs. 1,500", date: "Aug 28, 2026", status: "Pending" },
  { student: "S.K.K. Kumara Jr.",      desc: "July Class Fee",   amount: "Rs. 1,500", date: "Jul 28, 2026", status: "Approved" },
  { student: "M.N.F. Raheema",         desc: "July Class Fee",   amount: "Rs. 1,500", date: "Jul 27, 2026", status: "Approved" },
  { student: "D.M.N.S. Dissanayake",   desc: "May Class Fee",        amount: "Rs. 1,500", date: "May 30, 2026", status: "Rejected" },
];

const statusBadge: Record<string, any> = { Approved: "success", Pending: "warning", Rejected: "danger" };

export default function AdminPayments({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total Payments" value="Rs. 7,500" icon="💰" color="navy" />
        <StatCard label="Approved" value={2} icon="✅" color="green" />
        <StatCard label="Pending" value={2} icon="⏳" color="amber" />
        <StatCard label="Rejected" value={1} icon="❌" color="red" />
      </div>

      <Card className="overflow-hidden">
        <div className="px-5 py-4 border-b border-[#EEF2FB]">
          <h3 className="font-bold text-[#0D1B5E]">All Payment Records</h3>
        </div>
        <Table
          headers={["Student", "Description", "Amount", "Date", "Status", "Actions"]}
          rows={payments.map((p, i) => [
            <span key={i} className="font-medium text-sm">{p.student}</span>,
            p.desc,
            p.amount,
            p.date,
            <Badge key={i} variant={statusBadge[p.status]}>{p.status}</Badge>,
            <div key={i} className="flex gap-1">
              {p.status === "Pending" && (
                <Btn variant="primary" size="sm" onClick={() => onNavigate("admin-payment-verify")}>Review</Btn>
              )}
              <Btn variant="ghost" size="sm">View</Btn>
            </div>,
          ])}
        />
      </Card>
    </div>
  );
}
