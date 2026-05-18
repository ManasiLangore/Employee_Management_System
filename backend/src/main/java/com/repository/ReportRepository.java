package com.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.ReportEntity;

@Repository
public interface ReportRepository extends JpaRepository<ReportEntity, Integer> {
    
    //Employee side dashboard ke liye text query machine
    List<ReportEntity> findByEmployeeEmpid(int empid);
}
