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

    //update
    public String updateEmployee(int empid, EmployeeEntity newemp){
        EmployeeEntity existingemp = repo.findById(empid).orElse(null);
        
        if(existingemp != null){
            existingemp.setFirstname(newemp.getFirstname());
            existingemp.setMiddlename(newemp.getMiddlename());
            existingemp.setLastname(newemp.getLastname());
            existingemp.setEmail(newemp.getEmail());
            existingemp.setContactno(newemp.getContactno());
            existingemp.setGender(newemp.getGender());
            existingemp.setDob(newemp.getDob());
            existingemp.setCaddress(newemp.getCaddress());
            existingemp.setPaddress(newemp.getPaddress());
            existingemp.setAdharno(newemp.getAdharno());
            existingemp.setEdu(newemp.getEdu());
            existingemp.setPanno(newemp.getPanno());
            existingemp.setExp(newemp.getExp());
            existingemp.setSalary(newemp.getSalary());
            existingemp.setDesignation(newemp.getDesignation());
            existingemp.setDepartment(newemp.getDepartment());
            existingemp.setReportingmanager(newemp.getReportingmanager());
            existingemp.setWorklocation(newemp.getWorklocation());
            existingemp.setStatus(newemp.getStatus());
            existingemp.setJoiningdate(newemp.getJoiningdate());
            existingemp.setProfile(newemp.getProfile());

            repo.save(existingemp);

            return "Employee record updated successfully";
        }
        return "Employee not found";
    }

    public List<EmployeeEntity> findByFirstname(String firstname){
        return repo.findByFirstname(firstname);
    }
    public List<EmployeeEntity>findByLastname(String lastname){
        return repo.findByLastname(lastname);
    }
    public List<EmployeeEntity>findByDept(String department){
        return repo.findByDepartment(department);
    }
    public List<EmployeeEntity>findByDesig(String designation){
        return repo.findByDesignation(designation);
    }
    public List<EmployeeEntity>findbyempid(Integer empid){
        return repo.findByEmpid(empid);
    }
}
