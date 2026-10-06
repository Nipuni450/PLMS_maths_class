import { Card, Input, Btn } from "../../components/ui";

export default function AdminSettings() {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Admin profile */}
      <Card className="p-6 mb-5">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0D1B5E] to-[#7C3AED] flex items-center justify-center text-white text-3xl font-bold">S</div>
          <div>
            <h2 className="text-lg font-bold text-[#0D1B5E]">Sir / Admin</h2>
            <p className="text-sm text-slate-500">admin@plms.lk</p>
            <p className="text-xs text-slate-400 mt-0.5">System Administrator</p>
          </div>
          <button className="ml-auto text-xs text-[#1565C0] hover:underline cursor-pointer">📷 Change Photo</button>
        </div>

        <h3 className="font-bold text-[#0D1B5E] mb-4">Admin Profile</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Full Name" value="Sir / Admin" onChange={() => {}} placeholder="Admin name" />
          <Input label="Email" type="email" value="admin@plms.lk" onChange={() => {}} />
          <Input label="Phone" value="+94 77 000 0001" onChange={() => {}} />
          <Input label="Role" value="System Administrator" onChange={() => {}} />
        </div>
        <div className="mt-5">
          <Btn variant="primary">💾 Save Changes</Btn>
        </div>
      </Card>

      {/* Password */}
      <Card className="p-6 mb-5">
        <h3 className="font-bold text-[#0D1B5E] mb-4">Change Password</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Input label="Current Password" type="password" value="" onChange={() => {}} placeholder="••••••••" />
          <Input label="New Password" type="password" value="" onChange={() => {}} placeholder="••••••••" />
          <Input label="Confirm Password" type="password" value="" onChange={() => {}} placeholder="••••••••" />
        </div>
        <div className="mt-4">
          <Btn variant="primary">🔒 Update Password</Btn>
        </div>
      </Card>

      {/* System settings */}
      <Card className="p-6">
        <h3 className="font-bold text-[#0D1B5E] mb-4">System Settings</h3>
        <div className="flex flex-col gap-4">
          {[
            { label: "System Name", value: "PLMS" },
            { label: "Academic Year", value: "2026" },
            { label: "Subject", value: "Mathematics (Grades 6 to 11)" },
            { label: "Monthly Class Fee", value: "Rs. 1,500" },
            { label: "Current Term", value: "Term 3" },
          ].map(f => (
            <div key={f.label}>
              <Input label={f.label} value={f.value} onChange={() => {}} />
            </div>
          ))}
          <div className="flex items-center justify-between p-4 rounded-xl bg-[#F0F4FF]">
            <div>
              <p className="text-sm font-semibold text-slate-800">Maintenance Mode</p>
              <p className="text-xs text-slate-500">Temporarily disable student/parent access</p>
            </div>
            <div className="w-12 h-6 rounded-full bg-slate-300 relative cursor-pointer">
              <div className="w-5 h-5 rounded-full bg-white shadow absolute top-0.5 left-0.5 transition-all" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Btn variant="primary">💾 Save Settings</Btn>
        </div>
      </Card>
    </div>
  );
}
