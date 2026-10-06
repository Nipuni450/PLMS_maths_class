import { StatCard, Card, Badge, Btn } from "../../components/ui";

export default function StudentDashboard({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <div>
      {/* Welcome banner */}
      <div className="bg-gradient-to-r from-[#0D1B5E] to-[#1565C0] rounded-2xl p-6 text-white mb-6 flex items-center justify-between">
        <div>
          <p className="text-blue-200 text-sm mb-1">Good morning,</p>
          <h2 className="text-2xl font-bold">W.W.B.A.M.S.B. Daskon 👋</h2>
          <p className="text-blue-100 text-sm mt-1">You have 2 upcoming classes today.</p>
        </div>
        <div className="hidden md:block text-6xl">🎓</div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="Upcoming Classes" value={3} icon="📅" sub="This week" color="blue" />
        <StatCard label="Pending Quizzes" value={2} icon="📝" sub="Due soon" color="amber" />
        <StatCard label="Average Grade" value="84%" icon="📊" sub="This term" color="navy" />
        <StatCard label="Pending Payments" value="Rs. 1,500" icon="💳" sub="Due by Aug 31" color="red" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Classes */}
        <Card className="lg:col-span-2 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[#0D1B5E]">Upcoming Classes</h3>
            <button onClick={() => onNavigate("student-classes")} className="text-xs text-[#1565C0] hover:underline cursor-pointer">View all →</button>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { subject: "Algebra", date: "Today, 10:00 AM", teacher: "Sir", status: "live" },
              { subject: "Geometry", date: "Tomorrow, 2:00 PM", teacher: "Sir", status: "upcoming" },
              { subject: "Trigonometry", date: "Fri, 9:00 AM", teacher: "Sir", status: "upcoming" },
            ].map(cls => (
              <div key={cls.subject} className="flex items-center justify-between p-3 rounded-xl bg-[#F0F4FF] border border-[#D1DAEA]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1565C0] flex items-center justify-center text-white text-lg">🎓</div>
                  <div>
                    <p className="font-semibold text-sm text-slate-800">{cls.subject}</p>
                    <p className="text-xs text-slate-500">{cls.date} · {cls.teacher}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {cls.status === "live" && <Badge variant="success">● Live</Badge>}
                  <Btn variant="primary" size="sm" onClick={() => {}}>Join Zoom</Btn>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="flex flex-col gap-4">
          <Card className="p-5">
            <h3 className="font-bold text-[#0D1B5E] mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: "📅", label: "Classes", page: "student-classes" },
                { icon: "📹", label: "Recordings", page: "student-recordings" },
                { icon: "📝", label: "Quizzes", page: "student-quizzes" },
                { icon: "📊", label: "Grades", page: "student-grades" },
                { icon: "💳", label: "Payments", page: "student-payments" },
                { icon: "🔔", label: "Notifications", page: "student-notifications" },
              ].map(a => (
                <button key={a.label} onClick={() => onNavigate(a.page)}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-[#F0F4FF] hover:bg-[#E8EFF9] transition-colors cursor-pointer">
                  <span className="text-xl">{a.icon}</span>
                  <span className="text-xs font-semibold text-slate-600">{a.label}</span>
                </button>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <h3 className="font-bold text-[#0D1B5E] mb-3">Recent Announcements</h3>
            <div className="flex flex-col gap-3">
              {[
                { msg: "Grade 10 term test schedule released", time: "2 hours ago", type: "info" },
                { msg: "New geometry tutorial uploaded", time: "Yesterday", type: "success" },
                { msg: "Payment reminder: Aug fee due", time: "3 days ago", type: "warning" },
              ].map((a, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${a.type === "info" ? "bg-blue-500" : a.type === "success" ? "bg-green-500" : "bg-amber-500"}`} />
                  <div>
                    <p className="text-sm text-slate-700">{a.msg}</p>
                    <p className="text-xs text-slate-400">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Recent Recordings */}
      <Card className="mt-6 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-[#0D1B5E]">Recent Recordings</h3>
          <button onClick={() => onNavigate("student-recordings")} className="text-xs text-[#1565C0] hover:underline cursor-pointer">View all →</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: "Algebra – Chapter 5", subject: "Algebra", date: "Aug 27", duration: "1h 12m" },
            { title: "Geometry – Angles & Triangles", subject: "Geometry", date: "Aug 25", duration: "58m" },
            { title: "Statistics – Overview", subject: "Statistics", date: "Aug 23", duration: "1h 5m" },
          ].map(r => (
            <div key={r.title} className="rounded-xl overflow-hidden border border-[#D1DAEA]">
              <div className="h-24 bg-gradient-to-br from-[#0D1B5E] to-[#1565C0] flex items-center justify-center text-4xl">▶️</div>
              <div className="p-3">
                <p className="text-sm font-semibold text-slate-800 truncate">{r.title}</p>
                <p className="text-xs text-slate-500">{r.subject} · {r.date} · {r.duration}</p>
                <Btn variant="secondary" size="sm" onClick={() => {}} className="mt-2 w-full justify-center">Watch</Btn>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
