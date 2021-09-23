package com.example.carrental.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Entity
@Table(name = "mst_vehicle")
public class Vehicle {
    @Id
    private String id;
    private String vhcName;
    private int vhcNumber;
    private String vhcModel;
    private String vhcStatus;
    private String vhcPrice;

    public String getId() {
        if (id == null || id.equals("")){
            id = UUID.randomUUID().toString();
        }
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getVhcName() {
        return vhcName;
    }

    public void setVhcName(String vhcName) {
        this.vhcName = vhcName;
    }

    public int getVhcNumber() {
        return vhcNumber;
    }

    public void setVhcNumber(int vhcNumber) {
        this.vhcNumber = vhcNumber;
    }

    public String getVhcModel() {
        return vhcModel;
    }

    public void setVhcModel(String vhcModel) {
        this.vhcModel = vhcModel;
    }

    public String getVhcStatus() {
        return vhcStatus;
    }

    public void setVhcStatus(String vhcStatus) {
        this.vhcStatus = vhcStatus;
    }

    public String getVhcPrice() {
        return vhcPrice;
    }

    public void setVhcPrice(String vhcPrice) {
        this.vhcPrice = vhcPrice;
    }
}
