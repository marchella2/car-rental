package com.example.carrental.models.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;

public class TransactionReport {
    private String id;
    private String fullName;
    private String vhcModel;
    private String vhcName;
    private String driverName;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateRent;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateReturn;
    private String status;
    private Long totalPrice;

    public LocalDate getDateReturn() {
        return dateReturn;
    }

    public void setDateReturn(LocalDate dateReturn) {
        this.dateReturn = dateReturn;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public LocalDate getDateRent() {
        return dateRent;
    }

    public void setDateRent(LocalDate dateRent) {
        this.dateRent = dateRent;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getVhcModel() {
        return vhcModel;
    }

    public void setVhcModel(String vhcModel) {
        this.vhcModel = vhcModel;
    }

    public String getVhcName() {
        return vhcName;
    }

    public void setVhcName(String vhcName) {
        this.vhcName = vhcName;
    }

    public String getDriverName() {
        return driverName;
    }

    public void setDriverName(String driverName) {
        this.driverName = driverName;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Long getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Long totalPrice) {
        this.totalPrice = totalPrice;
    }
}
