package com.repository;

import com.entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Integer> {

}
