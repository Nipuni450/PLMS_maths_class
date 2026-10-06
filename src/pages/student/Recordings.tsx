import { useState } from "react";
import { Card, SearchBar, Select, Btn, Badge } from "../../components/ui";

const recordings = [
  { title: "Algebra – Chapter 5 Equations", subject: "Algebra", date: "Aug 27, 2026", duration: "1h 12m", teacher: "Sir" },
  { title: "Geometry – Angles & Triangles", subject: "Geometry", date: "Aug 25, 2026", duration: "58m", teacher: "Sir" },
  { title: "Statistics – Overview", subject: "Statistics", date: "Aug 23, 2026", duration: "1h 5m", teacher: "Sir" },
  { title: "Trigonometry – Part 2", subject: "Trigonometry", date: "Aug 20, 2026", duration: "45m", teacher: "Sir" },
  { title: "Algebra – Factorising", subject: "Algebra", date: "Aug 18, 2026", duration: "1h", teacher: "Sir" },
  { title: "Geometry – Circles", subject: "Geometry", date: "Aug 15, 2026", duration: "52m", teacher: "Sir" },
];

const gradients = [
  "from-[#0D1B5E] to-[#1565C0]",
  "from-[#1565C0] to-[#7C3AED]",
  "from-[#15803D] to-[#1565C0]",
];

export default function StudentRecordings() {
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("All");

  const filtered = recordings.filter(r =>
    (subjectFilter === "All" || r.subject === subjectFilter) &&
    (r.title.toLowerCase().includes(search.toLowerCase()) || r.subject.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="flex-1">
          <SearchBar value={search} onChange={setSearch} placeholder="Search recordings..." />
        </div>
        <div className="w-48">
          <Select
            value={subjectFilter}
            onChange={setSubjectFilter}
            options={[
              { value: "All", label: "All Topics" },
              { value: "Algebra", label: "Algebra" },
              { value: "Geometry", label: "Geometry" },
              { value: "Trigonometry", label: "Trigonometry" },
              { value: "Statistics", label: "Statistics" },
            ]}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((r, i) => (
          <Card key={i} className="overflow-hidden">
            <div className={`h-32 bg-gradient-to-br ${gradients[i % 3]} flex items-center justify-center relative`}>
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-3xl cursor-pointer hover:bg-white/30 transition">▶️</div>
              <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded">{r.duration}</span>
            </div>
            <div className="p-4">
              <p className="font-semibold text-slate-800 text-sm mb-1 leading-tight">{r.title}</p>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="info">{r.subject}</Badge>
              </div>
              <p className="text-xs text-slate-400 mb-3">{r.date} · {r.teacher}</p>
              <div className="flex gap-2">
                <Btn variant="primary" size="sm" className="flex-1 justify-center">▶ Watch</Btn>
                <Btn variant="secondary" size="sm">⬇</Btn>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
