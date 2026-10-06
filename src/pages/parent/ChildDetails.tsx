import { Card, Badge } from "../../components/ui";

export default function ChildDetails() {
  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1565C0] to-[#7C3AED] flex items-center justify-center text-white text-4xl font-bold flex-shrink-0">
            D
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-[#0D1B5E]">W.W.B.A.M.S.B. Daskon</h2>
            <p className="text-slate-500 mb-2">Student ID: 223598726</p>
            <Badge variant="success">Active</Badge>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#EEF2FB]">
          {[
            { label: "Email", value: "daskon@plms.lk", icon: "📧" },
            { label: "Phone", value: "+94 77 235 9872", icon: "📱" },
            { label: "Address", value: "No. 45, Temple Road, Kandy", icon: "📍" },
            { label: "Enrollment Date", value: "January 15, 2026", icon: "📅" },
            { label: "Subject", value: "Mathematics", icon: "📚" },
            { label: "Grade", value: "Grade 10", icon: "🎓" },
          ].map(f => (
            <div key={f.label} className="flex gap-3 items-start">
              <span className="text-xl flex-shrink-0">{f.icon}</span>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">{f.label}</p>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">{f.value}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
