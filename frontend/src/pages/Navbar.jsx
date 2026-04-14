import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Brain,
  BarChart3,
  Bell,
  LogOut,
} from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const user = localStorage.getItem("user");

  // 🔥 LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const navItem = (path, label, Icon) => (
    <button
      onClick={() => navigate(path)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
        location.pathname === path
          ? "bg-white text-indigo-600 font-semibold"
          : "text-white/90 hover:bg-white/10"
      }`}
    >
      <Icon size={18} />
      {label}
    </button>
  );

  return (
    <div className="navbar">

      {/* LEFT */}
      <div className="flex items-center gap-6">
        <h2 className="text-lg font-bold text-white">
          📘 Study Planner
        </h2>

        <div className="hidden md:flex gap-2">
          {navItem("/dashboard", "Dashboard", LayoutDashboard)}
          {navItem("/study-plan", "Study Plan", BookOpen)}
          {navItem("/scheduler", "AI Scheduler", Brain)}
          {navItem("/progress", "Progress", BarChart3)}
          {navItem("/notifications", "Notifications", Bell)}
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* USER */}
        {user && (
          <span className="text-white text-sm hidden md:block">
            👤 {user}
          </span>
        )}

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="logout-btn"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* CSS */}
      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 20px;
          background: linear-gradient(135deg, #4f46e5, #9333ea);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .logout-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.2);
          color: white;
          padding: 6px 12px;
          border-radius: 8px;
          transition: 0.2s;
        }

        .logout-btn:hover {
          background: rgba(255,255,255,0.4);
        }
      `}</style>
    </div>
  );
}