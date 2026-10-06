import { useState } from "react";
import DashboardLayout from "./components/DashboardLayout";

// Public pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

// Student pages
import StudentDashboard from "./pages/student/Dashboard";
import StudentProfile from "./pages/student/Profile";
import StudentClasses from "./pages/student/Classes";
import StudentRecordings from "./pages/student/Recordings";
import StudentTutorials from "./pages/student/Tutorials";
import StudentQuizzes from "./pages/student/Quizzes";
import QuizAttempt from "./pages/student/QuizAttempt";
import QuizResult from "./pages/student/QuizResult";
import StudentGrades from "./pages/student/Grades";
import StudentPayments from "./pages/student/Payments";
import StudentPaymentHistory from "./pages/student/PaymentHistory";
import StudentNotifications from "./pages/student/Notifications";

// Parent pages
import ParentDashboard from "./pages/parent/Dashboard";
import ChildDetails from "./pages/parent/ChildDetails";
import ChildProgress from "./pages/parent/ChildProgress";
import ChildGrades from "./pages/parent/ChildGrades";
import ParentPaymentDetails from "./pages/parent/PaymentDetails";
import ParentPaymentHistory from "./pages/parent/PaymentHistory";

// Admin pages
import AdminDashboard from "./pages/admin/Dashboard";
import AdminStudents from "./pages/admin/Students";
import AdminParents from "./pages/admin/Parents";
import AdminClasses from "./pages/admin/Classes";
import AdminRecordings from "./pages/admin/Recordings";
import AdminTutorials from "./pages/admin/Tutorials";
import AdminQuizzes from "./pages/admin/Quizzes";
import CreateQuiz from "./pages/admin/CreateQuiz";
import AdminGrades from "./pages/admin/Grades";
import AdminPayments from "./pages/admin/Payments";
import PaymentVerify from "./pages/admin/PaymentVerify";
import AdminSettings from "./pages/admin/Settings";

// ── Nav configs ────────────────────────────────────────────

const STUDENT_NAV = [
  { icon: "🏠", label: "Dashboard",       page: "student-dashboard" },
  { icon: "👤", label: "My Profile",      page: "student-profile" },
  { icon: "📅", label: "Zoom Classes",    page: "student-classes" },
  { icon: "📹", label: "Recordings",      page: "student-recordings" },
  { icon: "📚", label: "Tutorials",       page: "student-tutorials" },
  { icon: "📝", label: "Quizzes",         page: "student-quizzes" },
  { icon: "📊", label: "Grades",          page: "student-grades" },
  { icon: "💳", label: "Payments",        page: "student-payments" },
  { icon: "🧾", label: "Payment History", page: "student-payment-history" },
  { icon: "🔔", label: "Notifications",   page: "student-notifications" },
];

const PARENT_NAV = [
  { icon: "🏠", label: "Dashboard",        page: "parent-dashboard" },
  { icon: "👤", label: "Child Details",    page: "parent-child-details" },
  { icon: "📈", label: "Child Progress",   page: "parent-child-progress" },
  { icon: "📊", label: "Child Grades",     page: "parent-child-grades" },
  { icon: "💳", label: "Payment Details",  page: "parent-payment-details" },
  { icon: "🧾", label: "Payment History",  page: "parent-payment-history" },
  { icon: "🔔", label: "Notifications",    page: "parent-notifications" },
];

const ADMIN_NAV = [
  { icon: "🏠", label: "Dashboard",    page: "admin-dashboard" },
  { icon: "🎓", label: "Students",     page: "admin-students" },
  { icon: "👪", label: "Parents",      page: "admin-parents" },
  { icon: "📅", label: "Zoom Classes", page: "admin-classes" },
  { icon: "📹", label: "Recordings",   page: "admin-recordings" },
  { icon: "📚", label: "Tutorials",    page: "admin-tutorials" },
  { icon: "📝", label: "Quizzes",      page: "admin-quizzes" },
  { icon: "📊", label: "Grades",       page: "admin-grades" },
  { icon: "💳", label: "Payments",     page: "admin-payments" },
  { icon: "⚙️", label: "Settings",    page: "admin-settings" },
];

// ── Page title map ─────────────────────────────────────────

const PAGE_TITLES: Record<string, string> = {
  "student-dashboard":      "Dashboard",
  "student-profile":        "My Profile",
  "student-classes":        "Zoom Classes",
  "student-recordings":     "Class Recordings",
  "student-tutorials":      "Tutorials & Materials",
  "student-quizzes":        "Quizzes",
  "student-quiz-attempt":   "Quiz – Algebra Linear Equations",
  "student-quiz-result":    "Quiz Results",
  "student-grades":         "My Grades",
  "student-payments":       "Payments",
  "student-payment-history":"Payment History",
  "student-notifications":  "Notifications",
  "parent-dashboard":       "Parent Dashboard",
  "parent-child-details":   "Child Details",
  "parent-child-progress":  "Child Progress",
  "parent-child-grades":    "Child Grades",
  "parent-payment-details": "Payment Details",
  "parent-payment-history": "Payment History",
  "parent-notifications":   "Notifications",
  "admin-dashboard":        "Admin Dashboard",
  "admin-students":         "Student Management",
  "admin-parents":          "Parent Management",
  "admin-classes":          "Zoom Class Management",
  "admin-recordings":       "Recording Management",
  "admin-tutorials":        "Tutorial Management",
  "admin-quizzes":          "Quiz Management",
  "admin-create-quiz":      "Create Quiz",
  "admin-grades":           "Grade Management",
  "admin-payments":         "Payment Management",
  "admin-payment-verify":   "Verify Payment",
  "admin-settings":         "Settings",
};

// ── App ────────────────────────────────────────────────────

type Portal = "student" | "parent" | "admin" | null;

export default function App() {
  const [page, setPage] = useState("landing");
  const [portal, setPortal] = useState<Portal>(null);

  const navigate = (p: string, role?: string) => {
    if (role) setPortal(role as Portal);
    setPage(p);
  };

  // Public pages
  if (page === "landing")         return <Landing onNavigate={navigate} />;
  if (page === "login")           return <Login onNavigate={navigate} />;
  if (page === "register")        return <Register onNavigate={navigate} />;
  if (page === "forgot-password") return <ForgotPassword onNavigate={navigate} />;

  // Student portal
  if (portal === "student") {
    const pageContent = () => {
      switch (page) {
        case "student-profile":        return <StudentProfile />;
        case "student-classes":        return <StudentClasses />;
        case "student-recordings":     return <StudentRecordings />;
        case "student-tutorials":      return <StudentTutorials />;
        case "student-quizzes":        return <StudentQuizzes onNavigate={navigate} />;
        case "student-quiz-attempt":   return <QuizAttempt onNavigate={navigate} />;
        case "student-quiz-result":    return <QuizResult onNavigate={navigate} />;
        case "student-grades":         return <StudentGrades />;
        case "student-payments":       return <StudentPayments onNavigate={navigate} />;
        case "student-payment-history":return <StudentPaymentHistory />;
        case "student-notifications":  return <StudentNotifications />;
        default:                       return <StudentDashboard onNavigate={navigate} />;
      }
    };
    return (
      <DashboardLayout
        navItems={STUDENT_NAV}
        currentPage={page}
        onNavigate={navigate}
        userName="W.W.B.A.M.S.B. Daskon"
        userRole="Student · ID: 223598726"
        pageTitle={PAGE_TITLES[page] || "PLMS"}
      >
        {pageContent()}
      </DashboardLayout>
    );
  }

  // Parent portal
  if (portal === "parent") {
    const pageContent = () => {
      switch (page) {
        case "parent-child-details":  return <ChildDetails />;
        case "parent-child-progress": return <ChildProgress />;
        case "parent-child-grades":   return <ChildGrades />;
        case "parent-payment-details":return <ParentPaymentDetails />;
        case "parent-payment-history":return <ParentPaymentHistory />;
        default:                      return <ParentDashboard onNavigate={navigate} />;
      }
    };
    return (
      <DashboardLayout
        navItems={PARENT_NAV}
        currentPage={page}
        onNavigate={navigate}
        userName="Mr. W.B. Daskon"
        userRole="Parent"
        pageTitle={PAGE_TITLES[page] || "PLMS"}
      >
        {pageContent()}
      </DashboardLayout>
    );
  }

  // Admin portal
  if (portal === "admin") {
    const pageContent = () => {
      switch (page) {
        case "admin-students":       return <AdminStudents />;
        case "admin-parents":        return <AdminParents />;
        case "admin-classes":        return <AdminClasses />;
        case "admin-recordings":     return <AdminRecordings />;
        case "admin-tutorials":      return <AdminTutorials />;
        case "admin-quizzes":        return <AdminQuizzes onNavigate={navigate} />;
        case "admin-create-quiz":    return <CreateQuiz onNavigate={navigate} />;
        case "admin-grades":         return <AdminGrades />;
        case "admin-payments":       return <AdminPayments onNavigate={navigate} />;
        case "admin-payment-verify": return <PaymentVerify onNavigate={navigate} />;
        case "admin-settings":       return <AdminSettings />;
        default:                     return <AdminDashboard onNavigate={navigate} />;
      }
    };
    return (
      <DashboardLayout
        navItems={ADMIN_NAV}
        currentPage={page}
        onNavigate={navigate}
        userName="Sir / Admin"
        userRole="System Administrator"
        pageTitle={PAGE_TITLES[page] || "PLMS"}
      >
        {pageContent()}
      </DashboardLayout>
    );
  }

  // Fallback
  return <Landing onNavigate={navigate} />;
}
