import { useState } from "react";
import Logo from "../components/Logo";
import { Btn, Input } from "../components/ui";

const roles = ["Student", "Parent", "Sir / Admin"];

export default function Login({ onNavigate }: { onNavigate: (p: string, role?: string) => void }) {
  const [role, setRole] = useState("Student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    if (role === "Student") onNavigate("student-dashboard", "student");
    else if (role === "Parent") onNavigate("parent-dashboard", "parent");
    else onNavigate("admin-dashboard", "admin");
  };

  return (
    <div className="min-h-full grid lg:grid-cols-2">
      {/* Left panel */}
      <div className="hidden lg:flex bg-gradient-to-br from-[#0D1B5E] via-[#1565C0] to-[#1976D2] flex-col items-center justify-center p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-blue-300 blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-indigo-400 blur-3xl" />
        </div>
        <div className="relative z-10 text-center max-w-sm">
          <Logo size="lg" variant="light" />
          <h2 className="text-3xl font-bold mt-8 mb-4">Welcome Back</h2>
          <p className="text-blue-100 leading-relaxed">Access your personalized learning portal. Classes, recordings, quizzes and grades — all in one place.</p>
          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            {["🎓 Students", "👪 Parents", "👨‍🏫 Admin"].map(r => (
              <div key={r} className="bg-white/10 rounded-xl p-3">
                <p className="text-sm font-semibold">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex items-center justify-center p-8 bg-[#F0F4FF]">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-sm border border-[#D1DAEA] p-8">
            <div className="lg:hidden flex justify-center mb-6">
              <Logo size="md" />
            </div>
            <h1 className="text-2xl font-bold text-[#0D1B5E] mb-1">Sign In</h1>
            <p className="text-slate-500 text-sm mb-6">Select your role and enter your credentials.</p>

            {/* Role selector */}
            <div className="mb-5">
              <p className="text-sm font-medium text-slate-700 mb-2">Login as</p>
              <div className="flex gap-2">
                {roles.map(r => (
                  <button
                    key={r}
                    onClick={() => setRole(r)}
                    className={`flex-1 py-2 px-2 rounded-lg text-sm font-semibold border transition-all cursor-pointer
                      ${role === r ? "bg-[#1565C0] text-white border-[#1565C0] shadow-sm" : "bg-white text-slate-600 border-[#D1DAEA] hover:border-[#1565C0]"}`}
                  >
                    {r === "Student" ? "🎓" : r === "Parent" ? "👪" : "👨‍🏫"} {r}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Input label="Email / Username" type="email" value={email} onChange={setEmail} placeholder="you@example.com" required />
              <Input label="Password" type="password" value={password} onChange={setPassword} placeholder="••••••••" required />

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                  <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)}
                    className="w-4 h-4 accent-[#1565C0]" />
                  Remember me
                </label>
                <button onClick={() => onNavigate("forgot-password")}
                  className="text-sm text-[#1565C0] hover:underline font-medium cursor-pointer">
                  Forgot password?
                </button>
              </div>

              <Btn variant="primary" size="lg" onClick={handleLogin} className="w-full justify-center">
                🔑 Sign In
              </Btn>
            </div>

            <div className="mt-6 pt-5 border-t border-[#EEF2FB] text-center">
              <p className="text-sm text-slate-500">
                Don&apos;t have an account?{" "}
                <button onClick={() => onNavigate("register")}
                  className="text-[#1565C0] font-semibold hover:underline cursor-pointer">
                  Register as Student
                </button>
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 mt-4">
            © 2026 PLMS
          </p>
        </div>
      </div>
    </div>
  );
}
