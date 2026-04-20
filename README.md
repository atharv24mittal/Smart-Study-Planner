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

<img width="1895" height="920" alt="image" src="https://github.com/user-attachments/assets/64a388a4-f173-4ee3-8116-237caf3f45f4" />

<img width="1872" height="911" alt="image" src="https://github.com/user-attachments/assets/135a2f7f-dba1-44da-b8f3-1bfbef8c1ae9" />

<img width="1875" height="925" alt="image" src="https://github.com/user-attachments/assets/983b85fc-c957-4f37-a829-0bb25d9a3821" />

<img width="1877" height="942" alt="image" src="https://github.com/user-attachments/assets/cb05167f-a3ce-4a3d-bdd2-cf9d3415a8d6" />

<img width="1882" height="692" alt="image" src="https://github.com/user-attachments/assets/02c43f25-0398-4224-adfb-98be7cb72875" />

<img width="1887" height="709" alt="image" src="https://github.com/user-attachments/assets/6e22a249-bc83-4822-b598-c9213eb6f780" />

<img width="1880" height="563" alt="image" src="https://github.com/user-attachments/assets/166356aa-dcca-4716-86cf-3657c5f02c5d" />


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

* Atharv Mittal
* Aryaman Singh
* Arya Deshpande
* Anusha Shrivastava
---

## ⭐ If you like this project

Give it a star ⭐ on GitHub!
