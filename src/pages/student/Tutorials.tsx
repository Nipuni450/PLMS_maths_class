import { useState } from "react";
import { Card, SearchBar, Select, Btn, Badge } from "../../components/ui";

const tutorials = [
  { title: "Algebraic Expressions – Complete Guide", subject: "Algebra", desc: "Comprehensive notes with worked examples covering the key algebra techniques.", date: "Aug 25, 2026", type: "PDF" },
  { title: "Geometry – Angle Rules Summary", subject: "Geometry", desc: "Quick reference sheet of angle rules with worked examples.", date: "Aug 22, 2026", type: "PDF" },
  { title: "Statistics Quick Reference", subject: "Statistics", desc: "Mean, median, mode and range explained with worked examples.", date: "Aug 20, 2026", type: "PDF" },
  { title: "Trigonometry Formula Sheet", subject: "Trigonometry", desc: "All key trigonometric identities and formulas in one place.", date: "Aug 18, 2026", type: "PDF" },
  { title: "Geometry Video Series", subject: "Geometry", desc: "Video tutorial series on triangles, circles and angles from basics to advanced.", date: "Aug 15, 2026", type: "Video" },
  { title: "Quadratic Equations Guide", subject: "Algebra", desc: "Step-by-step guide to solving quadratic equations by factorising and the formula.", date: "Aug 12, 2026", type: "PDF" },
];

const typeIcon: Record<string, string> = { PDF: "📄", Video: "🎬", Slides: "📊" };
const typeColor: Record<string, string> = { PDF: "info", Video: "success", Slides: "warning" };

export default function StudentTutorials() {
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("All");

  const filtered = tutorials.filter(t =>
    (subjectFilter === "All" || t.subject === subjectFilter) &&
    (t.title.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="flex-1">
          <SearchBar value={search} onChange={setSearch} placeholder="Search tutorials..." />
        </div>
        <div className="w-48">
          <Select value={subjectFilter} onChange={setSubjectFilter} options={[
            { value: "All", label: "All Topics" },
            { value: "Algebra", label: "Algebra" },
              { value: "Geometry", label: "Geometry" },
              { value: "Trigonometry", label: "Trigonometry" },
              { value: "Statistics", label: "Statistics" },
          ]} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {filtered.map((t, i) => (
          <Card key={i} className="p-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#E8EFF9] flex items-center justify-center text-2xl flex-shrink-0">
                {typeIcon[t.type] || "📚"}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-2 mb-1">
                  <Badge variant="info">{t.subject}</Badge>
                  <Badge variant={typeColor[t.type] as any}>{t.type}</Badge>
                </div>
                <h3 className="font-semibold text-slate-800 text-sm leading-tight mb-1">{t.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-2">{t.desc}</p>
                <p className="text-xs text-slate-400 mb-3">Uploaded: {t.date}</p>
                <div className="flex gap-2">
                  <Btn variant="primary" size="sm">View</Btn>
                  <Btn variant="secondary" size="sm">⬇ Download</Btn>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
