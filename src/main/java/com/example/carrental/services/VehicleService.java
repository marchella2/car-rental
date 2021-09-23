package com.example.carrental.services;

import com.example.carrental.models.Vehicle;
import com.example.carrental.repositories.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehicleService {
    @Autowired
    private VehicleRepository vehicleRepository;

    public VehicleService(VehicleRepository vhc){
        this.vehicleRepository = vhc;
    }

    public List<Vehicle> getAllVehicle() {
        return vehicleRepository.findAll();
    }

    public List<Vehicle> createVehicle(Vehicle vehicle) {
        vehicleRepository.save(vehicle);
        return vehicleRepository.findAll();
    }

    public Optional<Vehicle> findVehicle(String id){
        return vehicleRepository.findById(id);
    }

    public void deleteVehicle(String id){
        vehicleRepository.deleteById(id);
    }

    public List<Vehicle> updateVehicle(Vehicle vhc){
        vehicleRepository.save(vhc);
        return vehicleRepository.findAll();
    }
}
