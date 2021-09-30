package com.example.carrental.models.Temporary;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;

public interface RentalTransaction {

    String getId();

    String getFullName();

    String getVhcModel();

    String getVhcName ();

    String getDriverName ();

    @JsonFormat(pattern = "yyyy-MM-dd")
    LocalDate getDateRent();

    @JsonFormat(pattern = "yyyy-MM-dd")
    LocalDate getDateReturn();

    String getStatus();

    Long getTotalPrice();


}
