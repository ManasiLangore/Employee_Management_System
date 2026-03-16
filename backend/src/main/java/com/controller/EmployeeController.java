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

    //update
    @PutMapping("updateemp")
    public String updateEmployee(@RequestParam int empid,@RequestBody EmployeeEntity newemp){
        return service.updateEmployee(empid, newemp
        );
    }

    //searching
    @GetMapping("/findbyfirstname")
    public List<EmployeeEntity>findbyfirstname(@RequestParam String firstname){
        return service.findByFirstname(firstname);
    }
    @GetMapping("/findbylastname")
    public List<EmployeeEntity>findbylastname(@RequestParam String lastname){
        return service.findByLastname(lastname);
    }
    @GetMapping("/findbydept")
    public List<EmployeeEntity>findbydept(@RequestParam String department){
        return service.findByDept(department);
    }
    @GetMapping("/findbydesig")
    public List<EmployeeEntity>findbydesig(@RequestParam String designation){
        return service.findByDesig(designation);
    }
    @GetMapping("/findbyempid")
    public List<EmployeeEntity>findbyempid(@RequestParam Integer empid){
        return service.findbyempid(empid);
    }



}
