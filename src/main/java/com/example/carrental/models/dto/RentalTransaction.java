package com.example.carrental.models.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;

public interface RentalTransaction {

    String getId();

    @JsonFormat(pattern = "yyyy-MM-dd")
    LocalDate getDateRent();

    String getFullName();

    String getVhcName();

    String getVhcModel();

    String getDriverName();

    String getStatus();

    Long getTotalPrice();
}
