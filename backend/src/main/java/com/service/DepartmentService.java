package com.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.DepartmentEntity;
import com.entity.EmployeeEntity;
import com.repository.DepartmentRepository;
import com.repository.EmployeeRepository; // 1. Added this import

@Service
public class DepartmentService {
    
    @Autowired
    private DepartmentRepository deptrepo;

    @Autowired 
    private EmployeeRepository employeeRepo; // 2. Added this injection

    public List<DepartmentEntity> getAllDepartments() {
        return deptrepo.findAll();
    }

    public DepartmentEntity getDepartmentById(int id) {
        return deptrepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Department not found with id: " + id));
    }

    public DepartmentEntity getDepartmentByName(String name) {
        return deptrepo.findByName(name);
    }

    public DepartmentEntity createDepartment(DepartmentEntity department) {
        return deptrepo.save(department);
    }

    public DepartmentEntity updateDepartment(int id, DepartmentEntity deptDetails) {
        DepartmentEntity department = getDepartmentById(id);
        department.setName(deptDetails.getName());
        department.setDescription(deptDetails.getDescription());
        return deptrepo.save(department);
    }

    public void deleteDepartment(int id) {
        if (!deptrepo.existsById(id)) {
            throw new RuntimeException("Cannot delete: Department not found");
        }
        deptrepo.deleteById(id);
    }

    // 3. Logic fixed to ensure the link happens during registration
    public EmployeeEntity registerEmployee(EmployeeEntity emp) {
        // Look up the actual Department record using the string name (e.g. "IT")
        DepartmentEntity actualDept = deptrepo.findByName(emp.getDepartment());
        
        if (actualDept != null) {
            // This is what fills the 'department_id' column in your database!
            emp.setDept(actualDept); 
        }
        
        return employeeRepo.save(emp);
    }
}