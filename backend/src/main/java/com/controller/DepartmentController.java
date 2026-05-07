package com.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.DepartmentEntity;
import com.service.DepartmentService;

@RestController
@RequestMapping("/api/departments")
@CrossOrigin(origins = "http://localhost:3000")
public class DepartmentController {

    @Autowired
    private DepartmentService deptServ;

    // 1. GET ALL DEPARTMENTS
    // @GetMapping
    // public ResponseEntity<List<DepartmentEntity>> getAllDepartments() {
    //     return ResponseEntity.ok(deptServ.getAllDepartments());
    // }

    // 2. GET SINGLE DEPARTMENT (with employee list)
    @GetMapping("/{id}")
    public ResponseEntity<DepartmentEntity> getDepartmentById(@PathVariable int id) {
        return ResponseEntity.ok(deptServ.getDepartmentById(id));
    }

    // 3. CREATE NEW DEPARTMENT
    @PostMapping
    public ResponseEntity<DepartmentEntity> createDepartment(@RequestBody DepartmentEntity department) {
        return new ResponseEntity<>(deptServ.createDepartment(department), HttpStatus.CREATED);
    }

    // 4. UPDATE DEPARTMENT
    @PutMapping("/{id}")
    public ResponseEntity<DepartmentEntity> updateDepartment(@PathVariable int id, @RequestBody DepartmentEntity department) {
        return ResponseEntity.ok(deptServ.updateDepartment(id, department));
    }

    // 5. DELETE DEPARTMENT
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteDepartment(@PathVariable int id) {
        deptServ.deleteDepartment(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
    
}
