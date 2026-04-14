package com.example.backend.model;

public class Schedule {
    private String time;
    private String subject;

    public Schedule() {
    }

    public Schedule(String time, String subject) {
        this.time = time;
        this.subject = subject;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }
}