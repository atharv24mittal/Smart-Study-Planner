import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import API from "../api";
import {
  LayoutDashboard,
  BookOpen,
  Bell,
  BarChart3,
  Brain,
} from "lucide-react";

export default function Progress() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  // 🔥 FETCH FROM BACKEND
  useEffect(() => {
    API.get("/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  }, []);

  const completed = tasks.filter((t) => t.status === "Completed").length;
  const pending = tasks.length - completed;

  const data = [
    { name: "Completed", value: completed },
    { name: "Pending", value: pending },
  ];

  const COLORS = ["#22C55E", "#EF4444"];

  return (
    <div className="flex min-h-screen progress-bg">

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

          <button className="nav-active">
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
            Progress & Analytics
          </h1>
          <div className="glass-card px-4 py-2 text-sm">
            📊 Performance Overview
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="card-gradient">
            <p>Total Tasks</p>
            <h2>{tasks.length}</h2>
          </div>

          <div className="card-gradient-green">
            <p>Completed</p>
            <h2>{completed}</h2>
          </div>

          <div className="card-gradient-red">
            <p>Pending</p>
            <h2>{pending}</h2>
          </div>
        </div>

        {/* CHART + BAR */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* CHART */}
          <div className="glass-card p-6 flex flex-col items-center">
            <h2 className="font-semibold mb-4">Task Distribution</h2>

            <PieChart width={300} height={300}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>

          {/* PROGRESS BAR */}
          <div className="glass-card p-6">
            <h2 className="font-semibold mb-4">Overall Progress</h2>

            <div className="w-full bg-gray-200 rounded-full h-5">
              <div
                className="progress-bar"
                style={{
                  width: `${(completed / tasks.length) * 100 || 0}%`,
                }}
              ></div>
            </div>

            <p className="mt-3 text-gray-700">
              {Math.round((completed / tasks.length) * 100 || 0)}% completed
            </p>
          </div>
        </div>

        {/* INSIGHT */}
        <div className="mt-8 insight-box">
          🚀 You're doing great! Keep consistency to maximize productivity.
        </div>
      </div>

      {/* SAME CSS */}
      <style>{`
        .progress-bg {
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
        }
        .glass-card {
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
        }
        .card-gradient {
          background: linear-gradient(135deg, #4f46e5, #6366f1);
          color: white;
          padding: 20px;
          border-radius: 1rem;
        }
        .card-gradient-green {
          background: linear-gradient(135deg, #22c55e, #4ade80);
          color: white;
          padding: 20px;
          border-radius: 1rem;
        }
        .card-gradient-red {
          background: linear-gradient(135deg, #ef4444, #f87171);
          color: white;
          padding: 20px;
          border-radius: 1rem;
        }
        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #4f46e5, #9333ea);
          border-radius: 999px;
        }
        .insight-box {
          background: linear-gradient(135deg, #22c55e, #4ade80);
          color: white;
          padding: 16px;
          border-radius: 12px;
        }
      `}</style>
    </div>
  );
}