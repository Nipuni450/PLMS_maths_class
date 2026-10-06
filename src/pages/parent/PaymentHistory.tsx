import { useState } from "react";
import { Card, Badge, Select, Table } from "../../components/ui";

const history = [
  { date: "Jul 28, 2026", desc: "July 2026 Class Fee", amount: "Rs. 1,500", status: "Paid" },
  { date: "Jun 27, 2026", desc: "June 2026 Class Fee", amount: "Rs. 1,500", status: "Paid" },
  { date: "May 30, 2026", desc: "May 2026 Class Fee",      amount: "Rs. 1,500", status: "Rejected" },
  { date: "Apr 28, 2026", desc: "April 2026 Class Fee", amount: "Rs. 1,500", status: "Paid" },
];

const statusBadge: Record<string, any> = { Paid: "success", Pending: "warning", Rejected: "danger" };

export default function ParentPaymentHistory() {
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = history.filter(h => statusFilter === "All" || h.status === statusFilter);

  return (
    <div>
      <div className="flex justify-end mb-5">
        <div className="w-40">
          <Select value={statusFilter} onChange={setStatusFilter} options={[
            { value: "All", label: "All Status" },
            { value: "Paid", label: "Paid" },
            { value: "Pending", label: "Pending" },
            { value: "Rejected", label: "Rejected" },
          ]} />
        </div>
      </div>
      <Card className="overflow-hidden">
        <Table
          headers={["Date", "Description", "Amount", "Status"]}
          rows={filtered.map(h => [
            h.date, h.desc, h.amount,
            <Badge key={h.date} variant={statusBadge[h.status]}>{h.status}</Badge>,
          ])}
        />
      </Card>
    </div>
  );
}
