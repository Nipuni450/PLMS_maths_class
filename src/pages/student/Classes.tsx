import { useState } from "react";
import { Card, Tabs, Badge, Btn, SearchBar, EmptyState } from "../../components/ui";

const upcoming = [
  { title: "Algebra – Chapter 6", subject: "Algebra", date: "Aug 29, 2026", time: "10:00 AM", teacher: "Sir", status: "upcoming" },
  { title: "Geometry Revision", subject: "Geometry", date: "Aug 30, 2026", time: "2:00 PM", teacher: "Sir", status: "upcoming" },
  { title: "Statistics – Mean & Median", subject: "Statistics", date: "Sep 1, 2026", time: "9:00 AM", teacher: "Sir", status: "upcoming" },
];

const completed = [
  { title: "Trigonometry", subject: "Trigonometry", date: "Aug 22, 2026", time: "10:00 AM", teacher: "Sir", status: "completed" },
  { title: "Algebra – Factorising", subject: "Algebra", date: "Aug 20, 2026", time: "2:00 PM", teacher: "Sir", status: "completed" },
];

export default function StudentClasses() {
  const [tab, setTab] = useState("Upcoming");
  const [search, setSearch] = useState("");
  const rows = (tab === "Upcoming" ? upcoming : completed).filter(c =>
    c.title.toLowerCase().includes(search.toLowerCase()) || c.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <Tabs tabs={["Upcoming", "Completed"]} active={tab} onChange={setTab} />
        <div className="flex-1">
          <SearchBar value={search} onChange={setSearch} placeholder="Search classes..." />
        </div>
      </div>

      <Card>
        {rows.length === 0 ? (
          <EmptyState icon="📅" title="No classes found" message="No classes match your search." />
        ) : (
          <div className="divide-y divide-[#EEF2FB]">
            {rows.map((cls, i) => (
              <div key={i} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1565C0] to-[#7C3AED] flex items-center justify-center text-2xl text-white flex-shrink-0">🎓</div>
                  <div>
                    <p className="font-semibold text-slate-800">{cls.title}</p>
                    <p className="text-sm text-slate-500">{cls.subject} · {cls.teacher}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{cls.date} at {cls.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={cls.status === "upcoming" ? "info" : "muted"}>
                    {cls.status === "upcoming" ? "Upcoming" : "Completed"}
                  </Badge>
                  {cls.status === "upcoming" && (
                    <Btn variant="primary" size="sm">Join Zoom</Btn>
                  )}
                  {cls.status === "completed" && (
                    <Btn variant="secondary" size="sm">Watch Recording</Btn>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
