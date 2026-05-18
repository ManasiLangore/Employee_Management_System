package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.entity.ReportEntity;
import com.service.ReportService;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins = "http://localhost:3000")
public class ReportController {
    
    @Autowired
    private ReportService reportServ;

    //A. EMPLOYEE SIDE: Submit a new issue report
    @PostMapping("/submit")
    public ResponseEntity<ReportEntity> submitReport(@RequestBody ReportEntity report){
        ReportEntity savedReport = reportServ.fileNewReport(report);
        return new ResponseEntity<>(savedReport, HttpStatus.CREATED);
    }

    //B. EMPLOYEE SIDE: View personal file history
    @GetMapping("employee/{empid}")
    public ResponseEntity<List<ReportEntity>> getEmployeeReports(@PathVariable int empid){
        return ResponseEntity.ok(reportServ.getAllReports());
    }

    //C. ADMIN SIDE: Resolve/Reply to an emplyee's report

    @PutMapping("/admin/resolve/{id}")
    public ResponseEntity<ReportEntity> resolvReport(
        @PathVariable int id,
        @RequestParam String status,
        @RequestParam String remark) {
            ReportEntity updatedReport = reportServ.updateReportStatus(id, status, remark);
            return ResponseEntity.ok(updatedReport);
        }
}

