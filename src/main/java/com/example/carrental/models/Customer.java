package com.example.carrental.models;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "mst_customer")
public class Customer {
    @Id
    private String id;
    private String fullName;
    private String nik;
    private String gender;
    private String phoneNumber;
    private String address;

    public String getId() {
        if (id == null || id.equals("")){
            id = UUID.randomUUID().toString();
        }
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getNik() {
        return nik;
    }

    public void setNik(String nik) {
        this.nik = nik;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
