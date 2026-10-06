import { Card, StatCard, Badge } from "../../components/ui";

export default function ParentDashboard({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <div>
      {/* Welcome banner */}
      <div className="bg-gradient-to-r from-[#0D1B5E] to-[#4527A0] rounded-2xl p-6 text-white mb-6 flex items-center justify-between">
        <div>
          <p className="text-purple-200 text-sm mb-1">Welcome back,</p>
          <h2 className="text-2xl font-bold">Parent – Daskon 👋</h2>
          <p className="text-purple-100 text-sm mt-1">Monitoring: W.W.B.A.M.S.B. Daskon · ID: 223598726</p>
        </div>
        <div className="hidden md:block text-6xl">👪</div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="Average Grade" value="74%" icon="📊" sub="This term" color="navy" />
        <StatCard label="Quiz Performance" value="76%" icon="📝" sub="9 quizzes" color="purple" />
        <StatCard label="Learning Progress" value="68%" icon="📈" sub="Overall" color="blue" />
        <StatCard label="Payment Status" value="Pending" icon="💳" sub="Rs. 1,500 due" color="amber" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Grades */}
        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[#0D1B5E]">Recent Grades</h3>
            <button onClick={() => onNavigate("parent-grades")} className="text-xs text-[#1565C0] hover:underline cursor-pointer">View all →</button>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { subject: "Algebra", grade: "A", score: "85%", quiz: "Linear Equations" },
              { subject: "Geometry", grade: "B", score: "72%", quiz: "Angles & Triangles" },
              { subject: "Trigonometry", grade: "C", score: "60%", quiz: "Basics" },
            ].map(g => (
              <div key={g.subject} className="flex items-center justify-between p-3 rounded-xl bg-[#F0F4FF]">
                <div>
                  <p className="font-semibold text-sm text-slate-800">{g.subject}</p>
                  <p className="text-xs text-slate-500">{g.quiz}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-slate-700">{g.score}</span>
                  <Badge variant={g.grade === "A" ? "success" : g.grade === "B" ? "info" : "warning"}>{g.grade}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Announcements */}
        <Card className="p-5">
          <h3 className="font-bold text-[#0D1B5E] mb-4">Recent Announcements</h3>
          <div className="flex flex-col gap-3">
            {[
              { msg: "Daskon scored 17/20 in Algebra quiz", time: "Yesterday", type: "success" },
              { msg: "August class fee of Rs. 1,500 is due by Aug 31", time: "2 days ago", type: "warning" },
              { msg: "New geometry tutorial has been uploaded", time: "4 days ago", type: "info" },
              { msg: "Term 3 results will be published on Sep 10", time: "1 week ago", type: "info" },
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
  );
}
