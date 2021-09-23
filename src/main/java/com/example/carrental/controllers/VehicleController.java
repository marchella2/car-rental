package com.example.carrental.controllers;

import com.example.carrental.models.Vehicle;
import com.example.carrental.services.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/vehicle")
public class VehicleController {
    @Autowired
    private VehicleService vehicleService;

    public VehicleController(VehicleService vhc){
        this.vehicleService = vhc;
    }

    @GetMapping("/get")
    public ResponseEntity<List<Vehicle>> showDataVehicle()
    {
        List<Vehicle> vehicleList = vehicleService.getAllVehicle();
        return new ResponseEntity<>(vehicleList, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<List<Vehicle>> createVehicle(@RequestBody Vehicle vehicle)
    {
        List<Vehicle> vehicleList = vehicleService.createVehicle(vehicle);
        return new ResponseEntity<>(vehicleList, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<List<Vehicle>> updateVehicle(@RequestBody Vehicle vehicle){
        List<Vehicle> vehicleList = vehicleService.updateVehicle(vehicle);
        return new ResponseEntity<>(vehicleList, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Optional<Vehicle>> find(@PathVariable("id") String id)
    {
        Optional<Vehicle> vehicleList = vehicleService.findVehicle(id);
        return new ResponseEntity<>(vehicleList, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteVehicle(@PathVariable("id") String id)
    {
        vehicleService.deleteVehicle(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
