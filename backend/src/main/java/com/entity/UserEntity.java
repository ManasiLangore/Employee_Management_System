package com.entity;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

//it will handle all registration data
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int uid;
    String firstname;
    String lastname;
    String gender;
    String email;
    long contactno;

    String role;
    int empid;//to check i
    String username;
    String password;
    String confirmpassward;
}
