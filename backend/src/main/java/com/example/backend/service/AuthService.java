package com.example.backend.service;

import com.example.backend.model.User;

import java.util.ArrayList;
import java.util.List;

public class AuthService {

    // 🔥 In-memory storage (acts like JSON DB)
    private static List<User> users = new ArrayList<>();

    // 🔐 REGISTER USER
    public boolean register(User user) {
        // check if user already exists
        for (User u : users) {
            if (u.getEmail().equalsIgnoreCase(user.getEmail())) {
                return false; // already exists
            }
        }

        users.add(user);
        return true;
    }

    // 🔐 LOGIN USER
    public boolean login(User user) {
        for (User u : users) {
            if (u.getEmail().equalsIgnoreCase(user.getEmail()) &&
                    u.getPassword().equals(user.getPassword())) {
                return true;
            }
        }
        return false;
    }

    // 🔥 (Optional) Get all users (for debug/testing)
    public List<User> getAllUsers() {
        return users;
    }
}