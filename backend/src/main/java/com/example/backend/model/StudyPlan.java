package com.example.backend.model;

import java.util.List;

public class StudyPlan {
    private List<Task> tasks;

    public StudyPlan() {
    }

    public StudyPlan(List<Task> tasks) {
        this.tasks = tasks;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }
}