package com.example.backend.service;

import com.example.backend.model.Task;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class AIScheduler {

    public static List<String> generateSchedule(List<Task> tasks) {

        List<String> schedule = new ArrayList<>();

        // 🔥 Step 1: Filter pending tasks
        List<Task> pendingTasks = new ArrayList<>();
        for (Task t : tasks) {
            if (t.getStatus().equalsIgnoreCase("Pending")) {
                pendingTasks.add(t);
            }
        }

        // 🔥 Step 2: Sort by deadline (earliest first)
        pendingTasks.sort(Comparator.comparing(Task::getDeadline));

        // 🔥 Step 3: Generate time slots
        LocalTime startTime = LocalTime.of(9, 0);

        for (Task task : pendingTasks) {

            LocalTime endTime = startTime.plusHours(1);

            String slot = startTime + " - " + endTime +
                    " → " + task.getName();

            schedule.add(slot);

            // 🔥 Break after 5 tasks (avoid overload)
            if (schedule.size() == 5)
                break;

            // 🔥 Add break (30 min gap)
            startTime = endTime.plusMinutes(30);
        }

        // 🔥 Step 4: Handle empty case
        if (schedule.isEmpty()) {
            schedule.add("No pending tasks — you're all caught up! 🎉");
        }

        return schedule;
    }
}