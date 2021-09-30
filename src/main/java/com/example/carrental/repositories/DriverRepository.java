package com.example.carrental.repositories;


import com.example.carrental.models.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DriverRepository extends JpaRepository<Driver, String> {

    List<Driver> findAllByDriverStatus(Boolean driverStatus);

}
