package com.example.carrental.services;

import com.example.carrental.models.Driver;
import com.example.carrental.models.RentalTrans;
import com.example.carrental.models.Temporary.RentalTransaction;
import com.example.carrental.models.Vehicle;
import com.example.carrental.repositories.DriverRepository;
import com.example.carrental.repositories.RentalRepository;
import com.example.carrental.repositories.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
public class RentalService {

    @Autowired
    private RentalRepository rentalRepository;

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private DriverRepository driverRepository;


    public List<RentalTrans> createTransaction (RentalTrans rentalTrans){
        Vehicle vehicle = vehicleRepository.findById(rentalTrans.getVehicleId()).orElse(null);

        // set date rent, counting days, counting between days and vehicle price
        rentalTrans.setDateRent(LocalDate.now());
        Long totalDays = ChronoUnit.DAYS.between(rentalTrans.getDateRent(), rentalTrans.getDateReturn());
        rentalTrans.setTotalPrice(totalDays * vehicle.getVhcPrice());
        rentalTrans.setStatus("on going"); // set status if condition was rent
        rentalTrans.setRentStatus(true);

        // gives condition if rents using driver
        if(rentalTrans.getDriverId() != null) {
            Driver driver = driverRepository.findById(rentalTrans.getDriverId()).orElse(null);
            Long totalPrice = rentalTrans.getTotalPrice() + (totalDays*50000);
            rentalTrans.setTotalPrice(totalPrice);
            driver.setDriverStatus(false);
            driverRepository.save(driver);
        }

        rentalRepository.save(rentalTrans);

        vehicle.setVhcStatus(false);
        vehicleRepository.save(vehicle);

        // return to transaction list
        return rentalRepository.findAll();
    }

    public List<RentalTransaction> showTransaction(){
        return rentalRepository.showAllTransaction();
    }

    // set for list active vehicle( true condition )
    public List<Vehicle> showActiveVehicle(){
        return vehicleRepository.findAllByVhcStatus(true);
    }

    // set for list active driver
    public List<Driver> showActiveDriver(){
        return driverRepository.findAllByDriverStatus(true);
    }

    // set for finish transaction
    public void finishTransaction(String id){
        RentalTrans rentalTrans = rentalRepository.findById(id).orElse(null);
        rentalTrans.setStatus("Finished"); // set status if condition rent was finish
        rentalTrans.setRentStatus(false);
        rentalRepository.save(rentalTrans);

        Vehicle vehicle = vehicleRepository.findById(rentalTrans.getVehicleId()).orElse(null);
        vehicle.setVhcStatus(true);
        vehicleRepository.save(vehicle);

        Driver driver = driverRepository.findById(rentalTrans.getDriverId()).orElse(null);
        driver.setDriverStatus(true);
        driverRepository.save(driver);

    }

}
