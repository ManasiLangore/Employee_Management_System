package com.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Attendance;
import com.repository.AttendanceRepository;

@Service
public class AttendanceService {
    
    @Autowired
    AttendanceRepository repo;


    // Employee action
    public Attendance punchIn(int empid){
        Attendance att = new Attendance();

        att.setEmpId(empid);
        att.setDate(LocalDate.now());
        att.setPunchInTime(LocalDateTime.now());
        att.setStatus("PENDING");

        return repo.save(att);
    }

    //Admin action- view pending
    public List<Attendance> getPending(){
        return repo.findByStatus("PENDING");
    }

    //Admin action - approve/reject
    public Attendance updateStatus(int id, String status){
        Attendance att = repo.findById(id).orElseThrow();
        att.setStatus(status);
        return repo.save(att);
    }
}
