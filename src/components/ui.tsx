import { ReactNode, useState } from "react";

/* ── Badge ─────────────────────────────────────────────── */
type BadgeVariant = "success" | "warning" | "danger" | "info" | "muted";
const badgeStyles: Record<BadgeVariant, string> = {
  success: "bg-green-100 text-green-700 border-green-200",
  warning: "bg-amber-100 text-amber-700 border-amber-200",
  danger:  "bg-red-100 text-red-700 border-red-200",
  info:    "bg-blue-100 text-blue-700 border-blue-200",
  muted:   "bg-slate-100 text-slate-600 border-slate-200",
};
export function Badge({ variant = "info", children }: { variant?: BadgeVariant; children: ReactNode }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badgeStyles[variant]}`}>
      {children}
    </span>
  );
}

/* ── Button ─────────────────────────────────────────────── */
type BtnVariant = "primary" | "secondary" | "danger" | "ghost" | "outline";
const btnStyles: Record<BtnVariant, string> = {
  primary:   "bg-[#1565C0] hover:bg-[#0D47A1] text-white shadow-sm",
  secondary: "bg-[#E8EFF9] hover:bg-[#D0DDF5] text-[#1565C0] font-semibold",
  danger:    "bg-red-600 hover:bg-red-700 text-white",
  ghost:     "bg-transparent hover:bg-slate-100 text-slate-700",
  outline:   "border border-[#1565C0] text-[#1565C0] hover:bg-[#E8EFF9] bg-white",
};
export function Btn({
  variant = "primary", children, onClick, type = "button", disabled, className = "", size = "md",
}: {
  variant?: BtnVariant; children: ReactNode; onClick?: () => void;
  type?: "button" | "submit"; disabled?: boolean; className?: string; size?: "sm" | "md" | "lg";
}) {
  const sizeClass = size === "sm" ? "px-3 py-1.5 text-sm" : size === "lg" ? "px-6 py-3 text-base" : "px-4 py-2 text-sm";
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center gap-2 rounded-lg font-semibold transition-all duration-150 cursor-pointer disabled:opacity-50 ${sizeClass} ${btnStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

/* ── Input ─────────────────────────────────────────────── */
export function Input({
  label, type = "text", value, onChange, placeholder, required, hint,
}: {
  label?: string; type?: string; value: string; onChange: (v: string) => void;
  placeholder?: string; required?: boolean; hint?: string;
}) {
  const [show, setShow] = useState(false);
  const isPass = type === "password";
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium text-slate-700">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>}
      <div className="relative">
        <input
          type={isPass ? (show ? "text" : "password") : type}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className="w-full px-3.5 py-2.5 rounded-lg border border-[#D1DAEA] bg-white text-sm text-slate-800 placeholder:text-slate-400
            focus:outline-none focus:ring-2 focus:ring-[#42A5F5] focus:border-[#1565C0] transition"
        />
        {isPass && (
          <button type="button" onClick={() => setShow(s => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
            {show ? "🙈" : "👁"}
          </button>
        )}
      </div>
      {hint && <p className="text-xs text-slate-500">{hint}</p>}
    </div>
  );
}

/* ── Select ─────────────────────────────────────────────── */
export function Select({
  label, value, onChange, options, required,
}: {
  label?: string; value: string; onChange: (v: string) => void;
  options: { value: string; label: string }[]; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium text-slate-700">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>}
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D1DAEA] bg-white text-sm text-slate-800
          focus:outline-none focus:ring-2 focus:ring-[#42A5F5] focus:border-[#1565C0] transition"
      >
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}

/* ── Card ─────────────────────────────────────────────── */
export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-[#D1DAEA] ${className}`}>{children}</div>
  );
}

/* ── Stat Card ─────────────────────────────────────────── */
export function StatCard({
  label, value, icon, sub, color = "blue",
}: {
  label: string; value: string | number; icon: string; sub?: string; color?: string;
}) {
  const colors: Record<string, string> = {
    blue:   "from-[#1565C0] to-[#1976D2]",
    navy:   "from-[#0D1B5E] to-[#1565C0]",
    purple: "from-[#6D28D9] to-[#7C3AED]",
    green:  "from-[#15803D] to-[#16A34A]",
    amber:  "from-[#B45309] to-[#D97706]",
    red:    "from-[#B91C1C] to-[#DC2626]",
  };
  return (
    <div className={`bg-gradient-to-br ${colors[color] || colors.blue} rounded-xl p-5 text-white shadow-md`}>
      <div className="flex justify-between items-start mb-3">
        <p className="text-sm font-medium text-blue-100">{label}</p>
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-3xl font-bold font-['Plus_Jakarta_Sans']">{value}</p>
      {sub && <p className="text-xs text-blue-200 mt-1">{sub}</p>}
    </div>
  );
}

/* ── Modal ─────────────────────────────────────────────── */
export function Modal({
  title, children, onClose,
}: {
  title: string; children: ReactNode; onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 z-10" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-[#0D1B5E]">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-xl leading-none">×</button>
        </div>
        {children}
      </div>
    </div>
  );
}

/* ── Table ─────────────────────────────────────────────── */
export function Table({
  headers, rows,
}: {
  headers: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#F0F4FF] border-b border-[#D1DAEA]">
            {headers.map(h => (
              <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#EEF2FB]">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-[#F8FAFF] transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-slate-700">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Tab Bar ─────────────────────────────────────────────── */
export function Tabs({
  tabs, active, onChange,
}: {
  tabs: string[]; active: string; onChange: (t: string) => void;
}) {
  return (
    <div className="flex gap-1 bg-[#F0F4FF] p-1 rounded-lg">
      {tabs.map(t => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all cursor-pointer
            ${active === t ? "bg-[#1565C0] text-white shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

/* ── Search Bar ─────────────────────────────────────────── */
export function SearchBar({ value, onChange, placeholder = "Search..." }: {
  value: string; onChange: (v: string) => void; placeholder?: string;
}) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-9 pr-4 py-2 rounded-lg border border-[#D1DAEA] bg-white text-sm w-full
          focus:outline-none focus:ring-2 focus:ring-[#42A5F5] focus:border-[#1565C0] transition"
      />
    </div>
  );
}

/* ── Avatar ─────────────────────────────────────────────── */
export function Avatar({ name, size = "md" }: { name: string; size?: "sm" | "md" | "lg" }) {
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  const sizeClass = size === "sm" ? "w-8 h-8 text-xs" : size === "lg" ? "w-14 h-14 text-xl" : "w-10 h-10 text-sm";
  return (
    <div className={`${sizeClass} rounded-full bg-gradient-to-br from-[#1565C0] to-[#7C3AED] flex items-center justify-center text-white font-bold flex-shrink-0`}>
      {initials}
    </div>
  );
}

/* ── Section header ─────────────────────────────────────── */
export function PageHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-[#0D1B5E]">{title}</h1>
        {subtitle && <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

/* ── Empty State ─────────────────────────────────────────── */
export function EmptyState({ icon, title, message }: { icon: string; title: string; message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-slate-700 mb-1">{title}</h3>
      <p className="text-sm text-slate-400 max-w-xs">{message}</p>
    </div>
  );
}
