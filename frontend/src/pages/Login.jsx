import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../api";
import { BookOpen, Lock, Mail } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔥 LOGIN FUNCTION
  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      if (res.data === "Login successful") {
        // 🔐 Save login state
        localStorage.setItem("user", email);

        navigate("/dashboard");
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("Server error. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex login-bg">

      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 flex-col justify-center items-center text-white p-10">
        <div className="text-center max-w-md">
          <div className="icon-glow mb-6">
            <BookOpen size={60} />
          </div>

          <h1 className="text-5xl font-bold mb-4">
            Smart Study Planner
          </h1>

          <p className="text-lg opacity-90">
            Plan smarter. Study better.  
            Let AI optimize your productivity 🚀
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full md:w-1/2 items-center justify-center px-6">
        <div className="glass-card p-8 w-full max-w-md">

          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Welcome Back 👋
          </h2>

          {/* EMAIL */}
          <div className="relative mb-4">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="Email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* PASSWORD */}
          <div className="relative mb-4">
            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* ERROR */}
          {error && (
            <p className="text-red-500 text-sm mb-3 text-center">
              {error}
            </p>
          )}

          {/* BUTTON */}
          <button onClick={handleLogin} className="btn-main w-full">
            Login
          </button>

          {/* DIVIDER */}
          <div className="flex items-center my-5">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="px-3 text-sm text-gray-500">OR</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* REGISTER */}
          <p className="text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-indigo-600 font-semibold cursor-pointer hover:underline"
            >
              Register
            </span>
          </p>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .login-bg {
          background: linear-gradient(135deg, #4f46e5, #9333ea, #ec4899);
        }
        .glass-card {
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(15px);
          border-radius: 1.5rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        .input-field {
          width: 100%;
          padding: 12px 12px 12px 40px;
          border-radius: 12px;
          border: 1px solid #d1d5db;
        }
        .btn-main {
          background: linear-gradient(135deg, #4f46e5, #9333ea);
          color: white;
          padding: 12px;
          border-radius: 12px;
          font-weight: 600;
        }
        .icon-glow {
          display: inline-flex;
          padding: 20px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
        }
      `}</style>
    </div>
  );
}