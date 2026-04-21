
package com.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

import com.entity.Attendance;

public interface AttendanceRepository extends JpaRepository<Attendance, Integer> {
    List<Attendance> findByStatus(String status);

    Optional<Attendance> findByEmpidAndDate(int empid, LocalDate date);
    
}