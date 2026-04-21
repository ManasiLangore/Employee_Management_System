package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Attendance;
import com.service.AttendanceService;

@RestController
@RequestMapping("/api/attendance")
@CrossOrigin(origins = "http://localhost:3000")
public class AttendanceController {
    @Autowired
    private AttendanceService service;

    

    //  Employee API
    @PostMapping("/punch-in/{empid}")
    public ResponseEntity<?> punchIn(@PathVariable int empid) {
        try {
            return new ResponseEntity<>(service.punchIn(empid), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    //  Admin API
    @GetMapping("/pending")
    public List<Attendance> getPending() {
        return service.getPending();
    }

    //  Admin API
    @PutMapping("/update/{id}")
    public Attendance updateStatus(@PathVariable int id,
                                   @RequestParam String status) {
        return service.updateStatus(id, status);
    }
}
