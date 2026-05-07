package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.DepartmentEntity;
import com.repository.DepartmentRepository;

@Service
public class DepartmentService {
    
    @Autowired
    private DepartmentRepository deptrepo;

    public DepartmentEntity getDepartmentById(int id) {
        return deptrepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Department not found"));
    }

    // Fix createDepartment to accept DepartmentEntity
    public DepartmentEntity createDepartment(DepartmentEntity department) {
        return deptrepo.save(department);
    }

    // Fix updateDepartment to accept Long and DepartmentEntity
    public DepartmentEntity updateDepartment(int id, DepartmentEntity deptDetails) {
        DepartmentEntity department = getDepartmentById(id);
        department.setName(deptDetails.getName());
        department.setDescription(deptDetails.getDescription());
        return deptrepo.save(department);
    }

    public void deleteDepartment(int id) {
        deptrepo.deleteById(id);
    }
}
