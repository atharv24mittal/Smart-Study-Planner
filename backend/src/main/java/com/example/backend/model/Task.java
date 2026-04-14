package com.example.backend.model;

public class Task {
    private Long id;
    private String name;
    private String subject;
    private String deadline;
    private String status;

    public Task() {
    }

    public Task(Long id, String name, String subject, String deadline, String status) {
        this.id = id;
        this.name = name;
        this.subject = subject;
        this.deadline = deadline;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getDeadline() {
        return deadline;
    }

    public void setDeadline(String deadline) {
        this.deadline = deadline;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}