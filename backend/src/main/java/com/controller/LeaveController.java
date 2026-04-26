package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.entity.LeaveEntity;
import com.entity.LeaveEntity.LeaveStatus;
import com.service.LeaveService;

@RestController
@RequestMapping("/api/leaves")
@CrossOrigin(origins = "http://localhost:3000")
public class LeaveController {
    @Autowired
    private LeaveService leaveService;

    @PostMapping("/apply")
    public ResponseEntity<LeaveEntity> apply(@RequestBody LeaveEntity request) {
        return ResponseEntity.ok(leaveService.applyLeave(request));
    }

    //for admin
    @GetMapping("/all")
    public ResponseEntity<List<LeaveEntity>> getAll() {
        return ResponseEntity.ok(leaveService.getAllLeaves());
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<LeaveEntity> updateStatus(
            @PathVariable int empid,
            @RequestParam LeaveStatus status,
            @RequestParam(required = false) String remarks) {
        return ResponseEntity.ok(leaveService.updateLeaveStatus(empid, status, remarks));
    }
    
}
