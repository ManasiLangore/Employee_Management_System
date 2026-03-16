package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.EmployeeEntity;
import com.repository.EmployeeRepository;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository repo;

    //add  emp
    public String addEmployee(EmployeeEntity emp) {

        repo.save(emp);

        return "Employee record added successfully";
    }

    //show emp
    public List<EmployeeEntity> getAllEmployees(){

        return repo.findAll();

    }

    //delete
    public String deleteEmployee(int id){

        repo.deleteById(id);
        return "Employee Deleted Successfully";

    }

}
