package com.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.PayrollEntity;

@Repository
public interface PayrollRepository extends JpaRepository<PayrollEntity, Long> {
    List<PayrollEntity> findByEmployeeEmpid(int empid);

    Optional<PayrollEntity> findByEmployeeEmpidAndPayPeriod(int empid, String payPeriod);
}
