package com.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.DepartmentEntity;

@Repository
public interface DepartmentRepository extends JpaRepository<DepartmentEntity, Integer> {
    // Custom query to find department by name if needed
    // Optional<DepartmentEntity> findByName(String name);

    DepartmentEntity findByName(String name);
}
