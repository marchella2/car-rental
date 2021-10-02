package com.example.carrental.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Entity
@Table(name = "mst_driver")
public class Driver {
    @Id
    private String id;
    private Long nik;
    private String driverName;
    private String driverPhone;
    private Boolean driverStatus;

    public String getId() {
        if (id == null || id.equals("")){
            id = UUID.randomUUID().toString();
        }
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Long getNik() {
        return nik;
    }

    public void setNik(Long nik) {
        this.nik = nik;
    }

    public String getDriverName() {
        return driverName;
    }

    public void setDriverName(String driverName) {
        this.driverName = driverName;
    }

    public String getDriverPhone() {
        return driverPhone;
    }

    public void setDriverPhone(String driverPhone) {
        this.driverPhone = driverPhone;
    }

    public Boolean getDriverStatus() {
        return driverStatus;
    }

    public void setDriverStatus(Boolean driverStatus) {
        this.driverStatus = driverStatus;
    }
}
