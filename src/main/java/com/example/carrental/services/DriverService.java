package com.example.carrental.services;

import com.example.carrental.models.Driver;
import com.example.carrental.repositories.DriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DriverService {

    @Autowired
    private DriverRepository driverRepository;

    public DriverService(DriverRepository driverRepo)
    {
        this.driverRepository = driverRepo;
    }

    public List<Driver> getAllDriver()
    {
        return driverRepository.findAll();
    }

    public List<Driver> createDriver(Driver driver)
    {
        driver.setDriverStatus(true);
        driverRepository.save(driver);
        return driverRepository.findAll();
    }

    public Optional<Driver> findDriver(String id)
    {
        return driverRepository.findById(id);
    }

    public void deleteDriver(String id)
    {
        driverRepository.deleteById(id);
    }

    public List<Driver> updateDriver(Driver driver)
    {
        driverRepository.save(driver);
        return driverRepository.findAll();
    }
}
