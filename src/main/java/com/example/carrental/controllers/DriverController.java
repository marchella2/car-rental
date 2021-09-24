package com.example.carrental.controllers;

import com.example.carrental.models.Driver;
import com.example.carrental.services.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/driver")
public class DriverController {
    @Autowired
    private DriverService driverService;

    public DriverController(DriverService driverSv)
    {
        this.driverService = driverSv;
    }

    @GetMapping("/get")
    public ResponseEntity<List<Driver>> showDataDriver()
    {
        List<Driver> driverList = driverService.getAllDriver();
        return new ResponseEntity<>(driverList, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<List<Driver>> createDriver(@RequestBody Driver driver)
    {
        List<Driver> driverList = driverService.updateDriver(driver);
        return new ResponseEntity<>(driverList, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<List<Driver>> updateDriver(@RequestBody Driver driver)
    {
        List<Driver> driverList = driverService.updateDriver(driver);
        return new ResponseEntity<>(driverList, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Optional<Driver>> findDriver(@PathVariable("id") String id)
    {
        Optional<Driver> driverList = driverService.findDriver(id);
        return new ResponseEntity<>(driverList, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteDriver(@PathVariable("id") String id)
    {
        driverService.deleteDriver(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
