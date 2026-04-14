package com.example.backend.service;

import com.example.backend.model.Task;
import com.example.backend.model.User;

import java.util.ArrayList;
import java.util.List;

public class DataStore {

    // 🔥 CENTRAL STORAGE (acts like JSON DB)

    public static List<Task> tasks = new ArrayList<>();
    public static List<User> users = new ArrayList<>();

}