package com.service;

import com.entity.UserEntity;
import com.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    // ✅ Register User
    public String registerUser(UserEntity user) {

        // check username already exists
        UserEntity existingUser = userRepository.findByUsername(user.getUsername());

        if (existingUser != null) {
            return "Username already exists";
        }

        // save user
        userRepository.save(user);

        return "Registration successful";
    }

    // ✅ Login User
    public UserEntity loginUser(String username, String password) {

        UserEntity user = userRepository.findByUsername(username);

        if (user != null && user.getPassword().equals(password)) {
            return user;
        }

        return null;
    }
}
