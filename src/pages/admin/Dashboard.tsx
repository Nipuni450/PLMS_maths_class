import { Card, StatCard, Badge, Btn, Avatar } from "../../components/ui";

const recentStudents = [
  { name: "W.W.B.A.M.S.B. Daskon", id: "223598726", email: "daskon@plms.lk", status: "Active" },
  { name: "A.K. Fernando", id: "223598730", email: "fernando@plms.lk", status: "Active" },
  { name: "R.M. Perera", id: "223598731", email: "perera@plms.lk", status: "Pending" },
];

const pendingPayments = [
  { student: "W.W.B.A.M.S.B. Daskon", amount: "Rs. 1,500", date: "Aug 29", status: "Pending" },
  { student: "A.K. Fernando",          amount: "Rs. 1,500", date: "Aug 28", status: "Pending" },
];

export default function AdminDashboard({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#0D1B5E] to-[#1565C0] rounded-2xl p-6 text-white mb-6 flex items-center justify-between">
        <div>
          <p className="text-blue-200 text-sm mb-1">Admin Overview</p>
          <h2 className="text-2xl font-bold">PLMS Control Panel</h2>
          <p className="text-blue-100 text-sm mt-1">August 29, 2026 · Term 3</p>
        </div>
        <div className="hidden md:block text-6xl">👨‍🏫</div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        <StatCard label="Total Students" value={24}     icon="🎓" color="navy" />
        <StatCard label="Total Parents"  value={18}     icon="👪" color="blue" />
        <StatCard label="Total Classes"  value={12}     icon="📅" sub="This month" color="purple" />
        <StatCard label="Total Revenue"  value="Rs. 36,000" icon="💰" color="green" />
        <StatCard label="Pending Payments" value={4}   icon="⏳" color="red" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Students */}
        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[#0D1B5E]">Recent Students</h3>
            <button onClick={() => onNavigate("admin-students")} className="text-xs text-[#1565C0] hover:underline cursor-pointer">View all →</button>
          </div>
          <div className="flex flex-col gap-3">
            {recentStudents.map(s => (
              <div key={s.id} className="flex items-center justify-between p-3 rounded-xl bg-[#F0F4FF]">
                <div className="flex items-center gap-3">
                  <Avatar name={s.name} size="sm" />
                  <div>
                    <p className="font-semibold text-sm text-slate-800 truncate max-w-[160px]">{s.name}</p>
                    <p className="text-xs text-slate-400">{s.id}</p>
                  </div>
                </div>
                <Badge variant={s.status === "Active" ? "success" : "warning"}>{s.status}</Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Pending Payments */}
        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[#0D1B5E]">Pending Payment Approvals</h3>
            <button onClick={() => onNavigate("admin-payments")} className="text-xs text-[#1565C0] hover:underline cursor-pointer">View all →</button>
          </div>
          <div className="flex flex-col gap-3">
            {pendingPayments.map((p, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-[#F0F4FF]">
                <div>
                  <p className="font-semibold text-sm text-slate-800">{p.student}</p>
                  <p className="text-xs text-slate-400">{p.amount} · Submitted {p.date}</p>
                </div>
                <div className="flex gap-2">
                  <Btn variant="primary" size="sm" onClick={() => onNavigate("admin-payment-verify")}>Review</Btn>
                </div>
              </div>
            ))}
            {pendingPayments.length === 0 && <p className="text-sm text-slate-400 text-center py-6">No pending approvals</p>}
          </div>
        </Card>
      </div>

      {/* Upcoming classes */}
      <Card className="mt-6 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-[#0D1B5E]">Upcoming Classes</h3>
          <button onClick={() => onNavigate("admin-classes")} className="text-xs text-[#1565C0] hover:underline cursor-pointer">Manage →</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: "Algebra Ch. 6", subject: "Grade 10", date: "Aug 29, 10:00 AM", students: 24 },
            { title: "Geometry Rev.", subject: "Grade 9", date: "Aug 30, 2:00 PM", students: 24 },
            { title: "Fractions & Decimals", subject: "Grade 6", date: "Sep 1, 9:00 AM", students: 24 },
          ].map(c => (
            <div key={c.title} className="p-4 rounded-xl bg-[#F0F4FF] border border-[#D1DAEA]">
              <Badge variant="info">{c.subject}</Badge>
              <p className="font-semibold text-slate-800 mt-2 text-sm">{c.title}</p>
              <p className="text-xs text-slate-500 mt-1">{c.date}</p>
              <p className="text-xs text-slate-400">👥 {c.students} students</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
