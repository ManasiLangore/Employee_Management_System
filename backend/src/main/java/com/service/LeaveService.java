package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import com.entity.LeaveEntity;
import com.entity.LeaveEntity.LeaveStatus;
import com.repository.LeaveRepository;

@Service
public class LeaveService {
    @Autowired
    private LeaveRepository leaveRepo;

    // Create a new leave request
    public LeaveEntity applyLeave(LeaveEntity request){
        if(request.getStartDate().isAfter(request.getEndDate())){
            throw new RuntimeException("Start date cannot be after end date");
        }

        return leaveRepo.save(request);
    }

    // Admin action: Approve or Reject
    public LeaveEntity updateLeaveStatus(int empid, LeaveStatus status, String remarks){
        LeaveEntity leave =  LeaveRepository.findByEmpid(empid)
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
