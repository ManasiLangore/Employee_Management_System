package com.repository;

import com.entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Integer> {

    List<EmployeeEntity> findByFirstname(String firstname);

    List<EmployeeEntity> findByLastname(String lastname);

    List<EmployeeEntity> findByDepartment(String department);

    List<EmployeeEntity> findByDesignation(String designation);

    // EmployeeEntity findByid(int empid);


}
