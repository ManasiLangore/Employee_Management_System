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
    // Check if the employee object is null first to avoid a NullPointerException
    if (leave.getEmployee() == null) {
        throw new RuntimeException("Backend Error: Employee object is null in the request!");
    }

    // This calls the getEmpid() inside EmployeeEntity
    int idFromReact = leave.getEmployee().getEmpid(); 
    
    System.out.println("Backend received ID: " + idFromReact); // This will help us debug

    EmployeeEntity existingEmployee = employeeRepo.findById(idFromReact)
        .orElseThrow(() -> new RuntimeException("Employee not found with id: " + idFromReact));
    
    leave.setEmployee(existingEmployee);
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
        // 1. Find the specific leave by its OWN ID (1, 2, 3...)
        LeaveEntity leave = leaveRepo.findById(empid)
            .orElseThrow(() -> new RuntimeException("Leave record not found with id: " + empid));

        // 2. Update the fields
        leave.setStatus(status);
        leave.setAdminRemark(remarks);

        // 3. Save the update
        return leaveRepo.save(leave);
    }

    // Get all leaves for Admin view
    public List<LeaveEntity> getAllLeaves() {
        return leaveRepo.findAll();
    }

    public List<LeaveEntity> getLeavesByEmployee(int empid) {
    return leaveRepo.findByEmployee_Empid(empid);
}
}
