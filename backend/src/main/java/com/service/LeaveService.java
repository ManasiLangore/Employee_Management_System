package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import com.entity.EmployeeEntity;
import com.entity.LeaveEntity;
import com.entity.LeaveEntity.LeaveStatus;
import com.repository.EmployeeRepository;
import com.repository.LeaveRepository;

@Service
public class LeaveService {
    @Autowired
    private LeaveRepository leaveRepo;

    @Autowired
private EmployeeRepository employeeRepo; // Add this if not already there

public LeaveEntity applyLeave(LeaveEntity leave) {
    // 1. Get the ID from the incoming payload
    int empId = leave.getEmployee().getId();
    
    // 2. Fetch the REAL, saved Employee from the database
    EmployeeEntity existingEmployee = employeeRepo.findById(empId)
        .orElseThrow(() -> new RuntimeException("Employee not found with id: " + empId));
    
    // 3. Attach the REAL employee to the leave
    leave.setEmployee(existingEmployee);
    
    // 4. Now save the leave
    return leaveRepo.save(leave);
}

    // Create a new leave request
    // public LeaveEntity applyLeave(LeaveEntity request){
    //     if(request.getStartDate().isAfter(request.getEndDate())){
    //         throw new RuntimeException("Start date cannot be after end date");
    //     }

    //     return leaveRepo.save(request);
    // }

   


    // Admin action: Approve or Reject
    public LeaveEntity updateLeaveStatus(int empid, LeaveStatus status, String remarks){
        LeaveEntity leave =  leaveRepo.findByEmployee_Empid(empid)
            .orElseThrow(() -> new RuntimeException("Leave record not found"));

            leave.setStatus(status);
            leave.setAdminRemark(remarks);

            return leaveRepo.save(leave);
    }

    // Get all leaves for Admin view
    public List<LeaveEntity> getAllLeaves() {
        return leaveRepo.findAll();
    }
}
