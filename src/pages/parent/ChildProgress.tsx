import { Card, StatCard } from "../../components/ui";

const subjects = [
  { name: "Algebra", progress: 86, quizzes: 3, lastActivity: "Aug 27, 2026" },
  { name: "Geometry",     progress: 72, quizzes: 3, lastActivity: "Aug 25, 2026" },
  { name: "Trigonometry",   progress: 60, quizzes: 3, lastActivity: "Aug 23, 2026" },
];

const activities = [
  { icon: "📝", action: "Completed Algebra quiz", score: "17/20", time: "Aug 29" },
  { icon: "📹", action: "Watched Geometry recording", score: null, time: "Aug 28" },
  { icon: "📚", action: "Downloaded Algebra tutorial", score: null, time: "Aug 26" },
  { icon: "📝", action: "Completed Trigonometry quiz", score: "13/20", time: "Aug 20" },
];

export default function ChildProgress() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <StatCard label="Overall Progress" value="72%" icon="📈" color="navy" />
        <StatCard label="Topics Covered" value={3} icon="📚" color="blue" />
        <StatCard label="Quizzes Taken" value={9} icon="📝" sub="Completed" color="purple" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Subject progress */}
        <Card className="p-5">
          <h3 className="font-bold text-[#0D1B5E] mb-5">Topic Progress</h3>
          <div className="flex flex-col gap-5">
            {subjects.map(s => (
              <div key={s.name}>
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <p className="font-semibold text-sm text-slate-800">{s.name}</p>
                    <p className="text-xs text-slate-400">{s.quizzes} quizzes · Last activity {s.lastActivity}</p>
                  </div>
                  <span className="text-sm font-bold text-[#1565C0]">{s.progress}%</span>
                </div>
                <div className="h-3 bg-[#EEF2FB] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#1565C0] to-[#7C3AED] rounded-full"
                    style={{ width: `${s.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent activity */}
        <Card className="p-5">
          <h3 className="font-bold text-[#0D1B5E] mb-4">Recent Learning Activity</h3>
          <div className="flex flex-col gap-4">
            {activities.map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#E8EFF9] flex items-center justify-center text-lg flex-shrink-0">{a.icon}</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-800">{a.action}</p>
                  {a.score && <p className="text-xs text-green-600 font-semibold">Score: {a.score}</p>}
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
