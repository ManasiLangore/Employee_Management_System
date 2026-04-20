package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
@CrossOrigin
public class AttendanceController {
    @Autowired
    private AttendanceService service;

    //  Employee API
    @PostMapping("/punch-in/{empId}")
    public Attendance punchIn(@PathVariable int empId) {
        return service.punchIn(empId);
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
