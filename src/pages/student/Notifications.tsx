import { useState } from "react";
import { Card, Badge, Btn } from "../../components/ui";

const allNotifications = [
  { id: 1, type: "class", icon: "📅", title: "New class scheduled", body: "Grade 10 Algebra – Chapter 6 on Sep 1 at 10:00 AM", time: "5 min ago", read: false },
  { id: 2, type: "quiz", icon: "📝", title: "Quiz available", body: "Algebra – Linear Equations quiz is now open. Due Sep 2.", time: "1 hour ago", read: false },
  { id: 3, type: "grade", icon: "📊", title: "Grade updated", body: "Your Trigonometry quiz result: 17/20 (85%). Grade: A", time: "Yesterday", read: false },
  { id: 4, type: "payment", icon: "💳", title: "Payment reminder", body: "August 2026 class fee of Rs. 1,500 is due by Aug 31.", time: "2 days ago", read: true },
  { id: 5, type: "class", icon: "📹", title: "Recording uploaded", body: "Algebra – Factorising recording from Aug 20 is now available.", time: "3 days ago", read: true },
  { id: 6, type: "grade", icon: "✅", title: "Payment approved", body: "Your July 2026 class fee payment has been approved.", time: "5 days ago", read: true },
];

const typeColor: Record<string, "info" | "success" | "warning" | "danger"> = {
  class: "info", quiz: "warning", grade: "success", payment: "danger",
};

export default function StudentNotifications() {
  const [notifs, setNotifs] = useState(allNotifications);
  const unread = notifs.filter(n => !n.read).length;

  const markAllRead = () => setNotifs(n => n.map(x => ({ ...x, read: true })));
  const markRead = (id: number) => setNotifs(n => n.map(x => x.id === id ? { ...x, read: true } : x));
  const clear = () => setNotifs([]);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          {unread > 0 && <Badge variant="danger">{unread} new</Badge>}
        </div>
        <div className="flex gap-2">
          <Btn variant="secondary" size="sm" onClick={markAllRead}>✓ Mark all read</Btn>
          <Btn variant="ghost" size="sm" onClick={clear} className="text-slate-400">🗑 Clear all</Btn>
        </div>
      </div>

      {notifs.length === 0 ? (
        <Card className="p-12 text-center">
          <p className="text-5xl mb-4">🔔</p>
          <h3 className="font-bold text-slate-600 mb-1">All caught up!</h3>
          <p className="text-sm text-slate-400">No notifications at this time.</p>
        </Card>
      ) : (
        <Card className="overflow-hidden">
          <div className="divide-y divide-[#EEF2FB]">
            {notifs.map(n => (
              <div key={n.id}
                className={`flex items-start gap-4 p-4 transition-colors cursor-pointer hover:bg-[#F8FAFF] ${!n.read ? "bg-[#F0F7FF]" : ""}`}
                onClick={() => markRead(n.id)}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${!n.read ? "bg-[#1565C0]/10" : "bg-slate-100"}`}>
                  {n.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className={`text-sm font-semibold ${!n.read ? "text-[#0D1B5E]" : "text-slate-700"}`}>{n.title}</p>
                    <Badge variant={typeColor[n.type]}>{n.type}</Badge>
                    {!n.read && <span className="w-2 h-2 bg-[#1565C0] rounded-full ml-auto flex-shrink-0" />}
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{n.body}</p>
                  <p className="text-xs text-slate-400 mt-1">{n.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
