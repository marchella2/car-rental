package com.example.carrental.controllers;

import com.example.carrental.models.DTO.TransactionReport;
import com.example.carrental.models.Driver;
import com.example.carrental.models.RentalTrans;
import com.example.carrental.models.Vehicle;
import com.example.carrental.services.RentalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/transaction")
public class RentalController {

    @Autowired
    private RentalService rentalService;


    @PostMapping("/create")
    public ResponseEntity<List<RentalTrans>> createTrans (@RequestBody RentalTrans rentalTrans) {
        List<RentalTrans> listRental = rentalService.createTransaction(rentalTrans);
        return new ResponseEntity<>(listRental, HttpStatus.CREATED);
    }

    @GetMapping("/get")
    public ResponseEntity<List<TransactionReport>> showTransaction(){
        return new ResponseEntity<>(rentalService.showTransaction(), HttpStatus.OK);
    }

    @GetMapping("/getvehicle")
    public List<Vehicle> showActiveVehicle(){
        return rentalService.showActiveVehicle();
    }

    @GetMapping("/getdriver")
    public List<Driver> showActiveDriver(){
        return rentalService.showActiveDriver();
    }

    @GetMapping("/finish/{id}")
    public ResponseEntity<?> showFinishTransaction (@PathVariable ("id") String id){
       rentalService.finishTransaction(id);
       return new ResponseEntity<>(HttpStatus.OK);
    }
}
