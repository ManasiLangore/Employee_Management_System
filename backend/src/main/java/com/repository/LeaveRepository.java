
package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.LeaveEntity;
import com.entity.LeaveEntity.LeaveStatus;

@Repository
public interface LeaveRepository extends JpaRepository<LeaveEntity, Integer>{
    List<LeaveEntity> findByEmpid(int empid);

    List<LeaveEntity> findByStatus(LeaveStatus status);

    
    
}