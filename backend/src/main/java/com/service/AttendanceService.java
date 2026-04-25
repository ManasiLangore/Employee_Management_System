package com.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Attendance;
import com.entity.EmployeeEntity;
import com.repository.AttendanceRepository;
import com.repository.EmployeeRepository;

@Service
public class AttendanceService {
    
    @Autowired
    AttendanceRepository repo;

    @Autowired
    EmployeeRepository emprepo;


    // Employee action
    public Attendance punchIn(int empid){

        EmployeeEntity emp = emprepo.findById(empid).orElse(null);

        if(emp == null){
            throw new RuntimeException("Employee not found");
        }

        // 1. Check if they already have a record for today
        if(repo.findByEmpidAndDate(empid, LocalDate.now()).isPresent()) {
            throw new RuntimeException("Already punched in for today!"); // Prevents duplicate rows
        }
        
        Attendance att = new Attendance();

        att.setEmpId(empid);
        att.setDate(LocalDate.now());
        att.setPunchInTime(LocalDateTime.now());
        att.setStatus("PENDING");
        
        att.setFirstname(emp.getFirstname());;
        att.setLastname(emp.getLastname());
        att.setDepartment(emp.getDepartment());

        
        return repo.save(att);  
    }

    //Admin action- view pending
    public List<Attendance> getPending(){
        List<Attendance> list = repo.findByStatus("PENDING");

    for(Attendance a : list){

        EmployeeEntity emp = emprepo.findById(a.getEmpId()).orElse(null);

        if(emp != null){
            a.setFirstname(emp.getFirstname());
            a.setLastname(emp.getLastname());
            a.setDepartment(emp.getDepartment());
        }
    }

    return list;
    }

    //Admin action - approve/reject
    public Attendance updateStatus(int id, String status){
        Attendance att = repo.findById(id).orElseThrow();
        att.setStatus(status);
        return repo.save(att);
    }
}
