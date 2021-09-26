package com.example.carrental.services;

import com.example.carrental.models.Driver;
import com.example.carrental.models.RentalTrans;
import com.example.carrental.models.Vehicle;
import com.example.carrental.repositories.DriverRepository;
import com.example.carrental.repositories.RentalRepository;
import com.example.carrental.repositories.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RentalService {
    @Autowired
    private RentalRepository rentalRepository;

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private DriverRepository driverRepository;

    public Object createTrans(RentalTrans trans)
    {
        Vehicle vhc = vehicleRepository.findById(trans.getVehicleId()).orElse(null);
        if(vhc == null){
            return false;
        }
        vhc.setVhcStatus(false);
        vehicleRepository.save(vhc);
        Driver driver = driverRepository.findById(trans.getDriverId()).orElse(null);
        if(driver == null){
            return false;
        }
        driver.setDriverStatus(false);
        driverRepository.save(driver);
        trans.setRentStatus(true);
//        trans.setDateRent(Date);
        rentalRepository.save(trans);
        return rentalRepository.findAll();
    }

}
