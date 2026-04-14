import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import {
  LayoutDashboard,
  BookOpen,
  Bell,
  BarChart3,
  Brain,
  Sparkles,
} from "lucide-react";

export default function Scheduler() {
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState([]);

  // 🔥 CALL BACKEND API
  const generateSchedule = async () => {
    try {
      const res = await API.post("/schedule");

      // backend returns list of strings → convert to UI format
      const formatted = res.data.map((item, index) => {
        const parts = item.split("→");
        return {
          time: parts[0]?.trim(),
          subject: parts[1]?.trim(),
        };
      });

      setSchedule(formatted);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex min-h-screen scheduler-bg">

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

          <button className="nav-active">
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
          <h1 className="text-3xl font-bold flex items-center gap-2 text-gray-800">
            <Brain className="text-purple-600" /> AI Smart Scheduler
          </h1>
          <div className="glass-card px-4 py-2 text-sm">
            🤖 Smart Planning
          </div>
        </div>

        {/* BUTTON */}
        <div className="mb-6">
          <button onClick={generateSchedule} className="ai-btn">
            <Sparkles size={18} />
            Generate Smart Schedule
          </button>
        </div>

        {/* SCHEDULE */}
        <div className="glass-card p-6">
          {schedule.length === 0 ? (
            <div className="text-center py-10">
              <Brain size={50} className="mx-auto text-gray-400 mb-3" />
              <p className="text-gray-500 text-lg">
                No schedule generated yet
              </p>
              <p className="text-sm text-gray-400">
                Let AI plan your study sessions 🚀
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {schedule.map((item, index) => (
                <div key={index} className="schedule-card">
                  <div>
                    <p className="font-semibold text-lg">
                      {item.subject}
                    </p>
                    <p className="text-sm text-gray-600">
                      {item.time}
                    </p>
                  </div>

                  <span className="tag">
                    Scheduled
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* INSIGHT */}
        <div className="mt-6 insight-box">
          💡 AI Insight: Study high-focus subjects in morning for best retention.
        </div>
      </div>

      {/* SAME CSS */}
      <style>{`
        .scheduler-bg {
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
        .ai-btn {
          display: flex;
          gap: 8px;
          background: linear-gradient(135deg, #9333ea, #c084fc);
          color: white;
          padding: 12px 20px;
          border-radius: 12px;
        }
        .schedule-card {
          display: flex;
          justify-content: space-between;
          padding: 16px;
          border-radius: 12px;
          background: white;
        }
        .tag {
          background: #ede9fe;
          color: #7c3aed;
          padding: 6px 12px;
          border-radius: 8px;
        }
        .insight-box {
          background: linear-gradient(135deg, #9333ea, #c084fc);
          color: white;
          padding: 16px;
          border-radius: 12px;
        }
      `}</style>
    </div>
  );
}