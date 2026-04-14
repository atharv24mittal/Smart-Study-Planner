import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import {
  LayoutDashboard,
  BookOpen,
  Bell,
  BarChart3,
  Brain,
  Plus,
  CheckCircle,
} from "lucide-react";

export default function StudyPlan() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // 🔥 FETCH TASKS
  const fetchTasks = () => {
    API.get("/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // 🔥 ADD TASK
  const addTask = async () => {
    if (!newTask) return;

    try {
      await API.post("/tasks", {
        name: newTask,
        subject: "General",
        deadline: "2026-04-30",
        status: "Pending",
      });

      setNewTask("");
      fetchTasks(); // 🔥 refresh from backend
    } catch (err) {
      console.log(err);
    }
  };

  // 🔥 UPDATE TASK (REAL BACKEND UPDATE)
  const markComplete = async (task) => {
    try {
      await API.put(`/tasks/${task.id}`, {
        ...task,
        status: "Completed",
      });

      fetchTasks(); // 🔥 refresh data
    } catch (err) {
      console.log(err);
    }
  };

  const pendingTasks = tasks.filter((t) => t.status === "Pending");
  const completedTasks = tasks.filter((t) => t.status === "Completed");

  return (
    <div className="flex min-h-screen study-bg">

      {/* SIDEBAR */}
      <div className="w-64 sidebar p-5 hidden md:flex flex-col">
        <h2 className="text-xl font-bold mb-8 text-white">
          Study Planner
        </h2>

        <nav className="flex flex-col gap-4 text-white/90">
          <button onClick={() => navigate("/dashboard")} className="nav-item">
            <LayoutDashboard size={18} /> Dashboard
          </button>

          <button className="nav-active">
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
            Study Plan
          </h1>
          <div className="glass-card px-4 py-2 text-sm">
            📚 Task Manager
          </div>
        </div>

        {/* ADD TASK */}
        <div className="flex gap-3 mb-6">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add new task..."
            className="input-field"
          />
          <button onClick={addTask} className="btn-add">
            <Plus size={18} /> Add
          </button>
        </div>

        {/* TASK COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* PENDING */}
          <div className="glass-card p-5">
            <h2 className="text-red-500 font-semibold mb-4">
              Pending Tasks
            </h2>

            {pendingTasks.length === 0 ? (
              <p className="text-gray-400">No pending tasks 🎉</p>
            ) : (
              pendingTasks.map((task) => (
                <div key={task.id} className="task-card">
                  <p className="font-semibold">{task.name}</p>
                  <p className="text-sm text-gray-500">
                    {task.deadline}
                  </p>

                  <button
                    onClick={() => markComplete(task)}
                    className="complete-btn"
                  >
                    Complete
                  </button>
                </div>
              ))
            )}
          </div>

          {/* COMPLETED */}
          <div className="glass-card p-5">
            <h2 className="text-green-500 font-semibold mb-4">
              Completed Tasks
            </h2>

            {completedTasks.length === 0 ? (
              <p className="text-gray-400">No completed tasks</p>
            ) : (
              completedTasks.map((task) => (
                <div key={task.id} className="task-card done">
                  <div>
                    <p className="font-semibold">{task.name}</p>
                    <p className="text-sm text-gray-500">
                      {task.deadline}
                    </p>
                  </div>
                  <CheckCircle className="text-green-500" />
                </div>
              ))
            )}
          </div>
        </div>

        {/* INSIGHT */}
        <div className="mt-8 insight-box">
          💡 Tip: Completing tasks updates AI scheduling automatically 🚀
        </div>
      </div>

      {/* SAME CSS */}
      <style>{`
        .study-bg {
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
        .input-field {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid #ddd;
        }
        .btn-add {
          display: flex;
          gap: 6px;
          align-items: center;
          background: linear-gradient(135deg, #4f46e5, #9333ea);
          color: white;
          padding: 10px 16px;
          border-radius: 12px;
        }
        .task-card {
          background: white;
          padding: 12px;
          border-radius: 12px;
          margin-bottom: 10px;
        }
        .task-card.done {
          background: #ecfdf5;
        }
        .complete-btn {
          margin-top: 8px;
          background: #3b82f6;
          color: white;
          padding: 5px 10px;
          border-radius: 6px;
        }
        .insight-box {
          background: linear-gradient(135deg, #4f46e5, #9333ea);
          color: white;
          padding: 16px;
          border-radius: 12px;
        }
      `}</style>
    </div>
  );
}