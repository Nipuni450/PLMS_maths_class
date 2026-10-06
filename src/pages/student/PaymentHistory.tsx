import { Card, Badge, Table } from "../../components/ui";

const history = [
  { date: "Jul 28, 2026", desc: "July 2026 Class Fee", amount: "Rs. 1,500", status: "Paid" },
  { date: "Jun 27, 2026", desc: "June 2026 Class Fee", amount: "Rs. 1,500", status: "Paid" },
  { date: "May 30, 2026", desc: "May 2026 Class Fee", amount: "Rs. 1,500", status: "Rejected" },
  { date: "Apr 28, 2026", desc: "April 2026 Class Fee", amount: "Rs. 1,500", status: "Paid" },
  { date: "Mar 27, 2026", desc: "March 2026 Class Fee", amount: "Rs. 1,500", status: "Paid" },
];

const statusBadge: Record<string, "success" | "warning" | "danger"> = {
  Paid: "success", Pending: "warning", Rejected: "danger",
};

export default function StudentPaymentHistory() {
  return (
    <Card className="overflow-hidden">
      <div className="px-5 py-4 border-b border-[#EEF2FB]">
        <h3 className="font-bold text-[#0D1B5E]">Payment History</h3>
      </div>
      <Table
        headers={["Date", "Description", "Amount", "Status", "Payment Slip"]}
        rows={history.map(h => [
          h.date,
          h.desc,
          h.amount,
          <Badge key={h.date} variant={statusBadge[h.status]}>{h.status}</Badge>,
          h.status === "Paid"
            ? <button key={h.date} className="text-xs text-[#1565C0] hover:underline cursor-pointer">View Slip 📄</button>
            : h.status === "Rejected"
              ? <span key={h.date} className="text-xs text-red-500">Rejected – Resubmit</span>
              : <span key={h.date} className="text-xs text-amber-600">Pending review</span>,
        ])}
      />
    </Card>
  );
}
