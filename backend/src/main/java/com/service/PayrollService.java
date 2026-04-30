package com.service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.EmployeeEntity;
import com.entity.PayrollEntity;
import com.repository.EmployeeRepository;
import com.repository.PayrollRepository;

@Service
public class PayrollService {

    @Autowired
    private PayrollRepository payrollRepository;


    @Autowired
    private EmployeeRepository employeeRepository;

    public PayrollEntity generateMonthlyPayroll(Integer employeeId, String monthYear, int unpaidLeaves) {
        EmployeeEntity emp = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        double annualSalary = Double.parseDouble(emp.getSalary()); 
        
        double monthlyBase = annualSalary / 12; // Assuming salary in Employee table is Annual
        double dailyRate = monthlyBase / 30;
        
        // Professional Calculation Logic
        double totalDeductions = (dailyRate * unpaidLeaves); 
        double allowances = monthlyBase * 0.10; // e.g., 10% fixed allowance
        double netPay = (monthlyBase + allowances) - totalDeductions;

        PayrollEntity payroll = new PayrollEntity();
        payroll.setEmployee(emp);
        payroll.setPayPeriod(monthYear);
        payroll.setBaseSalary(monthlyBase);
        payroll.setAllowances(allowances);
        payroll.setDeductions(totalDeductions);
        payroll.setNetPay(netPay);
        payroll.setPaymentDate(LocalDate.now());
        payroll.setStatus("PROCESSED");

        return payrollRepository.save(payroll);
    }
    
}
