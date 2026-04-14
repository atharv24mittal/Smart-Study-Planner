package com.example.backend.controller;

import com.example.backend.model.Task;
import com.example.backend.service.AIScheduler;
import com.example.backend.service.NotificationService;
import com.example.backend.service.DataStore;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class StudyController {

    // 🔥 GET ALL TASKS
    @GetMapping("/tasks")
    public List<Task> getTasks() {
        return DataStore.tasks;
    }

    // 🔥 ADD TASK
    @PostMapping("/tasks")
    public Task addTask(@RequestBody Task task) {
        task.setId(System.currentTimeMillis());
        DataStore.tasks.add(task);
        return task;
    }

    // 🔥 UPDATE TASK (VERY IMPORTANT)
    @PutMapping("/tasks/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody Task updatedTask) {
        for (Task task : DataStore.tasks) {
            if (task.getId().equals(id)) {
                task.setName(updatedTask.getName());
                task.setSubject(updatedTask.getSubject());
                task.setDeadline(updatedTask.getDeadline());
                task.setStatus(updatedTask.getStatus());
                return task;
            }
        }
        return null;
    }

    // 🔥 GENERATE SCHEDULE (NOW BASED ON TASKS)
    @PostMapping("/schedule")
    public List<String> generateSchedule() {
        return AIScheduler.generateSchedule(DataStore.tasks);
    }

    // 🔥 NOTIFICATIONS (PENDING TASKS)
    @GetMapping("/notifications")
    public List<Task> getNotifications() {
        return NotificationService.getPendingTasks(DataStore.tasks);
    }
}