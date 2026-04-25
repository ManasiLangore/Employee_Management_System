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

    // @GetMapping("/employee/{empid}")
    // public ResponseEntity<List<Attendance>> getEmployeeHistory (@PathVariable int empid){
    //     try{
    //         List<Attendance> history = service.getAttendaneByEmployeeId(empid);
    //         return new ResponseEntity<>(history, HttpStatus.Ok);
    //     }
    //     catch(Exception e){
    //         return  new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
    // }

    // @GetMapping("/today-status/{empid}")
    //     public ResponseEntity<?> getTodayStatus(@PathVariable int empid) {
    //         try {
    //             Attendance attendance = service.getTodayStatus(empid); 
    //             // This should return the attendance record for the current date
    //             return new ResponseEntity<>(attendance, HttpStatus.OK);
    //         } catch (Exception e) {
    //             return new ResponseEntity<>(null, HttpStatus.OK);
    //         }
    //     }

        // 1. Get History (Fixed typo in method name and HttpStatus)
    @GetMapping("/employee/{empid}")
    public ResponseEntity<List<Attendance>> getHistory(@PathVariable int empid) {
        List<Attendance> history = service.getAttendanceByEmployeeId(empid);
        return new ResponseEntity<>(history, HttpStatus.OK);
    }

    // 2. Get Today's Status (Removed duplicate and fixed ambiguous null)
    @GetMapping("/today-status/{empid}")
    public ResponseEntity<?> getTodayStatus(@PathVariable int empid) {
        Attendance attendance = service.getTodayStatus(empid);
        if (attendance == null) {
            return ResponseEntity.ok("{}"); // Return empty JSON string instead of null
        }
        return ResponseEntity.ok(attendance);
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
