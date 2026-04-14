import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api";
import {
  LayoutDashboard,
  BookOpen,
  CheckCircle,
  Bell,
  BarChart3,
  Brain,
} from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  // 🔥 FETCH TASKS FROM BACKEND
  useEffect(() => {
    API.get("/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  }, []);

  const completed = tasks.filter((t) => t.status === "Completed").length;
  const pending = tasks.length - completed;

  return (
    <div className="flex min-h-screen dashboard-bg">

      {/* SIDEBAR */}
      <div className="w-64 sidebar p-5 hidden md:flex flex-col">
        <h2 className="text-xl font-bold mb-8 text-white">
          Study Planner
        </h2>

        <nav className="flex flex-col gap-4 text-white/90">
          <button className="flex items-center gap-2 nav-active">
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

          <button onClick={() => navigate("/notifications")} className="nav-item">
            <Bell size={18} /> Notifications
          </button>
        </nav>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard
          </h1>
          <div className="glass-card px-4 py-2 text-sm">
            👋 Welcome back!
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="card-gradient">
            <p className="text-white/80">Total Tasks</p>
            <h2 className="text-3xl font-bold text-white">
              {tasks.length}
            </h2>
          </div>

          <div className="card-gradient-purple">
            <p className="text-white/80">Completed</p>
            <h2 className="text-3xl font-bold text-white">
              {completed}
            </h2>
          </div>

          <div className="card-gradient-green">
            <p className="text-white/80">Pending</p>
            <h2 className="text-3xl font-bold text-white">
              {pending}
            </h2>
          </div>
        </div>

        {/* PROGRESS */}
        <div className="mt-8 glass-card p-6">
          <h2 className="font-semibold mb-4">Overall Progress</h2>

          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="progress-bar"
              style={{
                width: `${(completed / tasks.length) * 100 || 0}%`,
              }}
            ></div>
          </div>

          <p className="text-sm text-gray-600 mt-2">
            {completed} completed / {pending} pending
          </p>
        </div>

        {/* ACTIONS */}
        <div className="mt-8">
          <h2 className="font-semibold mb-4">Quick Actions</h2>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/study-plan")}
              className="btn-gradient"
            >
              Study Plan
            </button>

            <button
              onClick={() => navigate("/scheduler")}
              className="btn-purple"
            >
              AI Scheduler
            </button>

            <button
              onClick={() => navigate("/progress")}
              className="btn-green"
            >
              Progress
            </button>
          </div>
        </div>
      </div>

      {/* SAME CSS */}
      <style>{`
        .dashboard-bg {
          background: linear-gradient(135deg, #eef2ff, #f5f3ff, #fdf2f8);
        }
        .sidebar {
          background: linear-gradient(180deg, #4f46e5, #9333ea);
        }
        .nav-item {
          padding: 8px;
          border-radius: 8px;
        }
        .nav-item:hover {
          background: rgba(255,255,255,0.1);
        }
        .nav-active {
          background: rgba(255,255,255,0.2);
          padding: 8px;
          border-radius: 8px;
        }
        .glass-card {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
        }
        .card-gradient {
          background: linear-gradient(135deg, #4f46e5, #6366f1);
          padding: 20px;
          border-radius: 1rem;
        }
        .card-gradient-purple {
          background: linear-gradient(135deg, #9333ea, #c084fc);
          padding: 20px;
          border-radius: 1rem;
        }
        .card-gradient-green {
          background: linear-gradient(135deg, #22c55e, #4ade80);
          padding: 20px;
          border-radius: 1rem;
        }
        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #4f46e5, #9333ea);
          border-radius: 999px;
        }
        .btn-gradient {
          background: linear-gradient(135deg, #4f46e5, #9333ea);
          color: white;
          padding: 10px 20px;
          border-radius: 12px;
        }
        .btn-purple {
          background: linear-gradient(135deg, #9333ea, #c084fc);
          color: white;
          padding: 10px 20px;
          border-radius: 12px;
        }
        .btn-green {
          background: linear-gradient(135deg, #22c55e, #4ade80);
          color: white;
          padding: 10px 20px;
          border-radius: 12px;
        }
      `}</style>
    </div>
  );
}