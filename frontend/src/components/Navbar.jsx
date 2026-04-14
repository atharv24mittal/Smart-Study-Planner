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

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const navItem = (path, label, Icon) => (
    <button
      onClick={() => navigate(path)}
      className={`nav-btn ${
        location.pathname === path ? "active" : ""
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="navbar">

      {/* LEFT */}
      <div className="left">
        <h2 className="logo">📘 Study Planner</h2>

        <div className="nav-links">
          {navItem("/dashboard", "Dashboard", LayoutDashboard)}
          {navItem("/study-plan", "Study Plan", BookOpen)}
          {navItem("/scheduler", "AI Scheduler", Brain)}
          {navItem("/progress", "Progress", BarChart3)}
          {navItem("/notifications", "Notifications", Bell)}
        </div>
      </div>

      {/* RIGHT */}
      <div className="right">
        {user && <span className="user">👤 {user}</span>}

        <button onClick={handleLogout} className="logout-btn">
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
          padding: 14px 28px;

          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(12px);

          border-bottom: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 8px 25px rgba(0,0,0,0.4);
        }

        .left {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .logo {
          color: #fff;
          font-weight: 700;
          font-size: 20px;
          letter-spacing: 0.5px;
        }

        .nav-links {
          display: flex;
          gap: 12px;
        }

        .nav-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 10px;
          border: none;
          cursor: pointer;

          background: transparent;
          color: #cbd5f5;

          font-size: 14px;
          transition: all 0.25s ease;
        }

        .nav-btn:hover {
          background: rgba(99, 102, 241, 0.2);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .nav-btn.active {
          background: linear-gradient(135deg, #6366f1, #a855f7);
          color: white;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(99,102,241,0.5);
        }

        .right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .user {
          color: #e2e8f0;
          font-size: 14px;
          background: rgba(255,255,255,0.05);
          padding: 6px 10px;
          border-radius: 8px;
        }

        .logout-btn {
          display: flex;
          align-items: center;
          gap: 8px;

          padding: 8px 14px;
          border-radius: 10px;
          border: none;
          cursor: pointer;

          background: linear-gradient(135deg, #ef4444, #f97316);
          color: white;
          font-weight: 500;

          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(239,68,68,0.4);
        }

        .logout-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 18px rgba(239,68,68,0.6);
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            gap: 10px;
          }

          .left {
            flex-direction: column;
            gap: 10px;
          }

          .nav-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}