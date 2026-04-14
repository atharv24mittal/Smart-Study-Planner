package com.example.backend.model;

public class Deadline {
    private String date;
    private String taskName;

    public Deadline() {
    }

    public Deadline(String date, String taskName) {
        this.date = date;
        this.taskName = taskName;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }
}