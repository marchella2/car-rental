package com.example.carrental.controllers;

import com.example.carrental.models.RentalTrans;
import com.example.carrental.services.RentalService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/transaction")
public class RentalController {

    private RentalService rentalService;

    @PostMapping("/create")
    public ResponseEntity<Object> createTransaction(@RequestBody RentalTrans data){
        Object send = rentalService.createTrans(data);
        if(send.equals(false)){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(send, HttpStatus.OK);
    }
}
