import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api";
import {
  Bell,
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Brain,
  AlertCircle,
} from "lucide-react";

export default function Notifications() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);

  // 🔥 FETCH FROM BACKEND
  useEffect(() => {
    API.get("/notifications")
      .then((res) => setNotifications(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex min-h-screen notifications-bg">

      {/* SIDEBAR */}
      <div className="w-64 sidebar p-5 hidden md:flex flex-col">
        <h2 className="text-xl font-bold mb-8 text-white">
          Study Planner
        </h2>

        <nav className="flex flex-col gap-4 text-white/90">
          <button onClick={() => navigate("/dashboard")} className="nav-item">
            <LayoutDashboard size={18} /> Dashboard
          </button>

          <button onClick={() => navigate("/study-plan")} className="nav-item">
            <BookOpen size={18} /> Study Plan
          </button>

          <button onClick={() => navigate("/scheduler")} className="nav-item">
            <Brain size={18} /> AI Scheduler
          </button>

          <button onClick={() => navigate("/progress")} className="nav-item">
            <BarChart3 size={18} /> Progress
          </button>

          <button className="nav-active">
            <Bell size={18} /> Notifications
          </button>
        </nav>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-6">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Notifications
          </h1>
          <div className="glass-card px-4 py-2 text-sm">
            🔔 Stay Updated
          </div>
        </div>

        {/* LIST */}
        <div className="glass-card p-6">

          {notifications.length === 0 ? (
            <div className="text-center py-10">
              <Bell size={40} className="mx-auto text-gray-400 mb-3" />
              <p className="text-gray-500 text-lg">
                No pending tasks 🎉
              </p>
              <p className="text-sm text-gray-400">
                You’re all caught up!
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {notifications.map((task) => (
                <div key={task.id} className="notif-card">

                  {/* LEFT */}
                  <div className="flex items-center gap-3">
                    <AlertCircle className="text-red-500" />
                    <div>
                      <p className="font-semibold">{task.name}</p>
                      <p className="text-sm text-gray-500">
                        Deadline approaching: {task.deadline}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <span className="tag-red">
                    Pending
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* TIP */}
        <div className="mt-6 tip-box">
          💡 Tip: Complete tasks early to avoid last-minute pressure.
        </div>
      </div>

      {/* INTERNAL CSS */}
      <style>{`
        .notifications-bg {
          background: linear-gradient(135deg, #eef2ff, #f5f3ff, #fdf2f8);
        }

        .sidebar {
          background: linear-gradient(180deg, #4f46e5, #9333ea);
        }

        .nav-item {
          display: flex;
          gap: 8px;
          padding: 8px;
          border-radius: 8px;
        }

        .nav-item:hover {
          background: rgba(255,255,255,0.1);
        }

        .nav-active {
          display: flex;
          gap: 8px;
          padding: 8px;
          border-radius: 8px;
          background: rgba(255,255,255,0.2);
          font-weight: 600;
        }

        .glass-card {
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .notif-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          border-radius: 12px;
          background: white;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .tag-red {
          background: #fee2e2;
          color: #dc2626;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 12px;
        }

        .tip-box {
          background: linear-gradient(135deg, #4f46e5, #9333ea);
          color: white;
          padding: 16px;
          border-radius: 12px;
        }
      `}</style>
    </div>
  );
}