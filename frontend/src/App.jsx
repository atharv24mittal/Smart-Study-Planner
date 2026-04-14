import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import StudyPlan from "./pages/StudyPlan";
import Scheduler from "./pages/Scheduler";
import Progress from "./pages/Progress";
import Notifications from "./pages/Notifications";

import Navbar from "./components/Navbar";

// 🔐 PROTECTED ROUTE
function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");
  return user ? children : <Navigate to="/" />;
}

// ❌ PUBLIC ROUTE (no navbar)
function PublicRoute({ children }) {
  return children;
}

// OPTIONAL: 404 PAGE
function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen text-xl">
      🚫 Page Not Found
    </div>
  );
}

function App() {
  const user = localStorage.getItem("user");

  return (
    <Router>

      {/* 🔥 NAVBAR (only if logged in) */}
      {user && <Navbar />}

      <Routes>

        {/* PUBLIC */}
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        {/* PROTECTED */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/study-plan"
          element={
            <ProtectedRoute>
              <StudyPlan />
            </ProtectedRoute>
          }
        />

        <Route
          path="/scheduler"
          element={
            <ProtectedRoute>
              <Scheduler />
            </ProtectedRoute>
          }
        />

        <Route
          path="/progress"
          element={
            <ProtectedRoute>
              <Progress />
            </ProtectedRoute>
          }
        />

        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;