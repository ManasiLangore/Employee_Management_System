package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.entity.PayrollEntity;
import com.repository.PayrollRepository;
import com.service.PayrollService;

@RestController
@RequestMapping("/api/payroll")
@CrossOrigin(origins = "http://localhost:3000")
public class PayrollController {
    
    @Autowired
    private PayrollService payrollService;

    @Autowired
    private PayrollRepository payrollRepository;

    // Admin: Generate payroll for an employee
    @PostMapping("/generate")
    public ResponseEntity<PayrollEntity> createPayroll(
            @RequestParam Integer employeeId, 
            @RequestParam String monthYear,
            @RequestParam int unpaidLeaves) {
        return ResponseEntity.ok(payrollService.generateMonthlyPayroll(employeeId, monthYear, unpaidLeaves));
    }

    // Employee: Get my salary history
    @GetMapping("/my-history/{employeeId}")
    public List<PayrollEntity> getMyPayroll(@PathVariable int employeeId) {
        return payrollRepository.findByEmployeeEmpid(employeeId);
    }
}
