package com.example.carrental.models;


import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "trx_transaction")
public class RentalTrans {

    @Id
    private String id;
    private String custId;
    private String driverId;
    private String vehicleId;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateRent;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateReturn;
    private Boolean rentStatus;
    private String status;
    private Long totalPrice;

    public String getId() {
        if (id == null || id.equals("")) {
            id = UUID.randomUUID().toString();
        }
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCustId() {
        return custId;
    }

    public void setCustId(String custId) {
        this.custId = custId;
    }

    public String getDriverId() {
        return driverId;
    }

    public void setDriverId(String driverId) {
        this.driverId = driverId;
    }

    public String getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(String vehicleId) {
        this.vehicleId = vehicleId;
    }

    public LocalDate getDateRent() {
        return dateRent;
    }

    public void setDateRent(LocalDate dateRent) {
        this.dateRent = dateRent;
    }

    public LocalDate getDateReturn() {
        return dateReturn;
    }

    public void setDateReturn(LocalDate dateReturn) {
        this.dateReturn = dateReturn;
    }

    public Boolean getRentStatus() {
        return rentStatus;
    }

    public void setRentStatus(Boolean rentStatus) {
        this.rentStatus = rentStatus;
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
