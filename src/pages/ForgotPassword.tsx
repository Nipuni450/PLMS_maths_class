import { useState } from "react";
import Logo from "../components/Logo";
import { Btn, Input } from "../components/ui";

export default function ForgotPassword({ onNavigate }: { onNavigate: (p: string) => void }) {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  return (
    <div className="min-h-full bg-[#F0F4FF] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-sm border border-[#D1DAEA] p-8">
          <div className="flex justify-center mb-6">
            <Logo size="md" />
          </div>
          <div className="text-center mb-7">
            <div className="w-14 h-14 rounded-full bg-[#E8EFF9] flex items-center justify-center text-3xl mx-auto mb-4">🔐</div>
            <h1 className="text-2xl font-bold text-[#0D1B5E] mb-1">
              {step === 1 ? "Reset Password" : "Set New Password"}
            </h1>
            <p className="text-slate-500 text-sm">
              {step === 1 ? "Enter your email and we'll send a reset link." : "Enter your new password below."}
            </p>
          </div>

          {step === 1 ? (
            <div className="flex flex-col gap-4">
              <Input label="Email Address" type="email" value={email} onChange={setEmail} placeholder="student@plms.lk" required />
              <Btn variant="primary" size="lg" onClick={() => setStep(2)} className="w-full justify-center">
                📧 Send Reset Link
              </Btn>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <Input label="New Password" type="password" value={newPass} onChange={setNewPass} placeholder="Min. 8 characters" required />
              <Input label="Confirm New Password" type="password" value={confirmPass} onChange={setConfirmPass} placeholder="Re-enter password" required />
              <Btn variant="primary" size="lg" onClick={() => onNavigate("login")} className="w-full justify-center">
                ✅ Reset Password
              </Btn>
            </div>
          )}

          <div className="mt-5 text-center">
            <button onClick={() => onNavigate("login")} className="text-sm text-[#1565C0] hover:underline cursor-pointer font-medium">
              ← Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
