import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../api";
import { User, Mail, Lock } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // 🔥 REGISTER FUNCTION
  const handleRegister = async () => {
    if (!email || !password) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      const res = await API.post("/auth/register", {
        email,
        password,
      });

      if (res.data === "User registered successfully") {
        setMessage("Registration successful! Redirecting...");
        setTimeout(() => navigate("/"), 1500);
      } else {
        setMessage("User already exists");
      }
    } catch (err) {
      setMessage("Server error. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex register-bg">

      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 flex-col justify-center items-center text-white p-10">
        <div className="text-center max-w-md">
          <div className="icon-glow mb-6">
            <User size={60} />
          </div>

          <h1 className="text-5xl font-bold mb-4">
            Create Account
          </h1>

          <p className="text-lg opacity-90">
            Join Smart Study Planner and boost your productivity 🚀
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full md:w-1/2 items-center justify-center px-6">
        <div className="glass-card p-8 w-full max-w-md">

          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Register ✨
          </h2>

          {/* NAME */}
          <div className="relative mb-4">
            <User className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Name (optional)"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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

          {/* MESSAGE */}
          {message && (
            <p className="text-sm text-center mb-3 text-indigo-600">
              {message}
            </p>
          )}

          {/* BUTTON */}
          <button onClick={handleRegister} className="btn-main w-full">
            Register
          </button>

          {/* LOGIN LINK */}
          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/")}
              className="text-indigo-600 font-semibold cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .register-bg {
          background: linear-gradient(135deg, #9333ea, #4f46e5, #22c55e);
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