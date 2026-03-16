package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.web.bind.annotation.*;

import com.entity.EmployeeEntity;
import com.service.EmployeeService;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class EmployeeController {

    @Autowired
    EmployeeService service;

    @PostMapping("/addemp")
    public String addEmployee(@RequestBody EmployeeEntity emp) {

        return service.addEmployee(emp);

    }

    @GetMapping("/findallemp")
    public List<EmployeeEntity> getEmployees(){

        return service.getAllEmployees();

    }

    //delete
    @DeleteMapping("/deleteemp/{id}")
    public String deleteEmployee(@PathVariable int id){

        return service.deleteEmployee(id);
    }



}
