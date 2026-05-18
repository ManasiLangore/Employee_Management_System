package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import com.entity.ReportEntity;
import com.repository.ReportRepository;

@Service
public class ReportService {
    @Autowired
    private ReportRepository reportRepo;

    //1.save a new report filed by an employee
    public ReportEntity fileNewReport(ReportEntity report){
        report.setStatus("PENDING");
        return reportRepo.saveAndFlush(report);
    }

    //2.fetch all report forthe admin panel
    public List<ReportEntity> getAllReports(){
        return reportRepo.findAll();
    }

    //3.Fetch report for a specific employee
    public List<ReportEntity> getReportsByEmployee(int empid){
        return reportRepo.findByEmployeeEmpid(empid);
    }

    //4.Admin updates report status and add a remark
    public ReportEntity updateReportStatus(int id, String status, String remark){
        ReportEntity existingReport = reportRepo.findById(id)
            .orElseThrow(()-> new RuntimeException("Report not found with id: "+id));

        existingReport.setStatus(status);
        existingReport.setAdminRemark(remark);

        return reportRepo.save(existingReport);
    }
}
