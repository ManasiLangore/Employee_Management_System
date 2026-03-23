package com.controller;

import com.entity.UserEntity;
import com.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // React connection
public class UserController {

    @Autowired
    UserService userService;

    // ✅ REGISTER API
    @PostMapping("/register")
    public String register(@RequestBody UserEntity user) {
        return userService.registerUser(user);
    }

    // ✅ LOGIN API
    @PostMapping("/login")
    public UserEntity login(@RequestBody UserEntity user) {
        return userService.loginUser(user.getUsername(), user.getPassword());
    }
}