import Logo from "../components/Logo";
import { Btn } from "../components/ui";

const features = [
  { icon: "🎥", title: "Zoom Classes", desc: "Join live classes directly through the portal with one click." },
  { icon: "📹", title: "Recordings", desc: "Rewatch recorded lessons at your own pace, anytime." },
  { icon: "📚", title: "Tutorials", desc: "Access curated learning materials and study resources." },
  { icon: "📝", title: "Quizzes", desc: "Test your knowledge with interactive timed quizzes." },
  { icon: "📊", title: "Grades", desc: "Track your academic performance in Mathematics." },
  { icon: "💳", title: "Payments", desc: "Manage fee payments and upload payment slips securely." },
];

const roles = [
  { icon: "🎓", label: "Student", desc: "Access classes, quizzes, grades & more", color: "from-[#1565C0] to-[#1976D2]" },
  { icon: "👪", label: "Parent", desc: "Monitor your child's learning progress", color: "from-[#0D1B5E] to-[#1565C0]" },
  { icon: "👨‍🏫", label: "Sir / Admin", desc: "Manage the entire learning system", color: "from-[#4527A0] to-[#7C3AED]" },
];

export default function Landing({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <div className="min-h-full bg-white font-['Inter']">
      {/* Nav */}
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-[#D1DAEA]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Logo size="md" />
          <div className="flex gap-3">
            <Btn variant="outline" onClick={() => onNavigate("login")}>Login</Btn>
            <Btn variant="primary" onClick={() => onNavigate("register")}>Register</Btn>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0D1B5E] via-[#1565C0] to-[#1976D2] text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-300 blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="flex justify-center mb-8">
            <Logo size="lg" variant="light" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-5 font-['Plus_Jakarta_Sans']">
            Grade 6–11 Mathematics,<br />
            <span className="text-[#90CAF9]">All in One Place</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            PLMS brings your Mathematics classes for Grades 6 to 11 into one seamless platform — classes, recordings, quizzes, grades, and payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Btn size="lg" variant="primary" onClick={() => onNavigate("login")}
              className="bg-white !text-[#1565C0] hover:bg-blue-50 shadow-lg">
              🔑 Login to Portal
            </Btn>
            <Btn size="lg" variant="outline" onClick={() => onNavigate("register")}
              className="!border-white !text-white !bg-transparent hover:!bg-white/10">
              📝 Student Registration
            </Btn>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-16 px-6 bg-[#F0F4FF]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0D1B5E] mb-2">Who Uses PLMS?</h2>
            <p className="text-slate-500">A dedicated portal for every user in the learning journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map(r => (
              <div key={r.label} className={`bg-gradient-to-br ${r.color} rounded-2xl p-7 text-white shadow-lg hover:-translate-y-1 transition-transform cursor-pointer`}
                onClick={() => onNavigate("login")}>
                <div className="text-4xl mb-4">{r.icon}</div>
                <h3 className="text-xl font-bold mb-1">{r.label}</h3>
                <p className="text-blue-100 text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0D1B5E] mb-2">Everything You Need</h2>
            <p className="text-slate-500 max-w-xl mx-auto">From joining live classes to tracking grades — PLMS handles it all in one place.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="bg-white rounded-xl border border-[#D1DAEA] p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#E8EFF9] group-hover:bg-[#1565C0] transition-colors flex items-center justify-center text-2xl mb-4">
                  {f.icon}
                </div>
                <h3 className="text-base font-bold text-[#0D1B5E] mb-1">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#0D1B5E] to-[#1565C0] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-blue-200 mb-8">Join PLMS today and learn Mathematics with confidence.</p>
          <div className="flex gap-4 justify-center">
            <Btn size="lg" onClick={() => onNavigate("register")}
              className="bg-white !text-[#1565C0] hover:bg-blue-50">
              Get Started
            </Btn>
            <Btn size="lg" variant="outline" onClick={() => onNavigate("login")}
              className="!border-white !text-white !bg-transparent hover:!bg-white/10">
              Login
            </Btn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D1B5E] text-blue-300 text-center py-6 text-sm">
        <Logo size="sm" variant="light" />
        <p className="mt-3">© 2026 PLMS. All rights reserved.</p>
        <p className="text-xs mt-1 text-blue-400">EER4189 | Group 75</p>
      </footer>
    </div>
  );
}
