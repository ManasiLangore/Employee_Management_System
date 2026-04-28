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
    public ResponseEntity<LeaveEntity> apply(@RequestBody LeaveEntity leave) {
        return ResponseEntity.ok(leaveService.applyLeave(leave));
    }

    //for admin
    @GetMapping("/all")
    public ResponseEntity<List<LeaveEntity>> getAll() {
        return ResponseEntity.ok(leaveService.getAllLeaves());
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<?> updateStatus(
        @PathVariable("id") int id, 
        @RequestParam("status") String statusStr, // Receive as String first
        @RequestParam("remarks") String remarks
    ) {
        try {
            // Convert the String from React ("REJECTED") to your Java Enum
            LeaveEntity.LeaveStatus status = LeaveEntity.LeaveStatus.valueOf(statusStr.toUpperCase());
            
            LeaveEntity updatedLeave = leaveService.updateLeaveStatus(id, status, remarks);
            return ResponseEntity.ok(updatedLeave);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Invalid status value: " + statusStr);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error: " + e.getMessage());
        }
    }


    @GetMapping("/employee/{empid}")
    public ResponseEntity<List<LeaveEntity>> getEmployeeLeaves(@PathVariable int empid) {
        List<LeaveEntity> leaves = leaveService.getLeavesByEmployee(empid);
        return ResponseEntity.ok(leaves);
    }
    
}
