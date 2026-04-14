package com.example.backend.service;

import com.example.backend.model.Task;
import java.util.List;
import java.util.stream.Collectors;

public class NotificationService {

    public static List<Task> getPendingTasks(List<Task> tasks) {
        return tasks.stream()
                .filter(t -> t.getStatus().equalsIgnoreCase("Pending"))
                .collect(Collectors.toList());
    }
}