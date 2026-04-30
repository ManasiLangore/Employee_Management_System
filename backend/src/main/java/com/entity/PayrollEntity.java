package com.entity;

import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
@Table(name = "salary")
public class PayrollEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employee_id", nullable = false)
    private EmployeeEntity employee;

    private String payPeriod; // Format: "April 2026"
    private double baseSalary;
    private double allowances;
    private double deductions;
    private double netPay;
    private LocalDate paymentDate;
    private String status; // e.g., "PROCESSED", "PAID"

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public EmployeeEntity getEmployee() {
        return employee;
    }
    public void setEmployee(EmployeeEntity employee) {
        this.employee = employee;
    }
    public String getPayPeriod() {
        return payPeriod;
    }
    public void setPayPeriod(String payPeriod) {
        this.payPeriod = payPeriod;
    }
    public double getBaseSalary() {
        return baseSalary;
    }
    public void setBaseSalary(double baseSalary) {
        this.baseSalary = baseSalary;
    }
    public double getAllowances() {
        return allowances;
    }
    public void setAllowances(double allowances) {
        this.allowances = allowances;
    }
    public double getDeductions() {
        return deductions;
    }
    public void setDeductions(double deductions) {
        this.deductions = deductions;
    }
    public double getNetPay() {
        return netPay;
    }
    public void setNetPay(double netPay) {
        this.netPay = netPay;
    }
    public LocalDate getPaymentDate() {
        return paymentDate;
    }
    public void setPaymentDate(LocalDate paymentDate) {
        this.paymentDate = paymentDate;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    
    
}