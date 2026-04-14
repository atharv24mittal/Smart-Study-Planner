package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/auth")
public class AuthController {

    private AuthService authService = new AuthService();

    // 🔥 REGISTER
    @PostMapping("/register")
    public String register(@RequestBody User user) {
        boolean success = authService.register(user);

        if (success) {
            return "User registered successfully";
        } else {
            return "User already exists";
        }
    }

    // 🔥 LOGIN
    @PostMapping("/login")
    public String login(@RequestBody User user) {
        boolean valid = authService.login(user);

        if (valid) {
            return "Login successful";
        } else {
            return "Invalid credentials";
        }
    }
}