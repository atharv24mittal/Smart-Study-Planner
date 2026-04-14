# 📘 Smart Study & Deadline Planner

An AI-powered full-stack web application that helps students efficiently manage tasks, track deadlines, and generate optimized study schedules.

---

## 🚀 Features

* 🔐 **Authentication System**

  * User Registration & Login
  * Session handling using local storage

* 📋 **Task Management (CRUD)**

  * Add tasks with deadlines
  * Mark tasks as completed
  * Real-time updates via backend APIs

* 🤖 **AI Smart Scheduler**

  * Automatically generates study schedules
  * Prioritizes tasks based on deadlines
  * Uses greedy algorithm for optimal planning

* 🔔 **Notifications System**

  * Displays pending tasks
  * Helps users stay on track

* 📊 **Progress Analytics**

  * Visual representation using charts
  * Tracks completed vs pending tasks

* 🌐 **Responsive UI**

  * Modern glassmorphism design
  * Fully responsive navigation with global navbar

---

## 🧠 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios
* Recharts
* Lucide Icons

### Backend

* Spring Boot (Java)
* REST APIs
* In-memory DataStore (JSON-like storage)

---

## 🏗️ Architecture

The application follows a layered architecture:

Frontend (React)
↓
API Layer (Axios)
↓
Controller (Spring Boot)
↓
Service Layer (Business Logic)
↓
DataStore (In-memory storage)

---

## 📸 Screenshots

(Add Login Page Screenshot)
(Add Register Page Screenshot)
(Add Dashboard Screenshot)
(Add Study Plan Screenshot)
(Add Scheduler Screenshot)
(Add Progress Screenshot)
(Add Notifications Screenshot)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2️⃣ Backend Setup

```bash
cd backend
.\mvnw.cmd spring-boot:run
```

Runs on:

```
http://localhost:8080
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## 🔌 API Endpoints

### Auth

* POST `/api/auth/register`
* POST `/api/auth/login`

### Tasks

* GET `/api/tasks`
* POST `/api/tasks`
* PUT `/api/tasks/{id}`

### Others

* POST `/api/schedule`
* GET `/api/notifications`

---

## 🧪 How It Works

* Users register and log in
* Tasks are stored in backend (DataStore)
* AI scheduler generates optimized study plans
* Dashboard & charts update dynamically
* Notifications highlight pending tasks

---

## 🧠 Algorithms Used

* Greedy Scheduling Algorithm (for AI planner)
* Sorting based on deadlines
* Filtering for task prioritization

---

## 🎯 Key Highlights

* Full-stack implementation (React + Spring Boot)
* Clean OOAD-based architecture
* Real-time UI updates via APIs
* Scalable and extendable design

---

## 🚀 Future Enhancements

* Persistent database (MySQL / MongoDB)
* JWT Authentication
* Mobile app version
* Smart ML-based scheduler
* Journal / activity tracking system

---

## 👨‍💻 Author

Atharv Mittal
Aryaman Singh
Arya Deshpande
Anusha Shrivastava
---

## ⭐ If you like this project

Give it a star ⭐ on GitHub!
