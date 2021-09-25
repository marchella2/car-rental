package com.example.carrental.controllers;

import com.example.carrental.models.Customer;
import com.example.carrental.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/customer")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    public CustomerController(CustomerService cstServ) {
        this.customerService = cstServ;
    }

    @GetMapping("/get")
    public ResponseEntity<List<Customer>> showDataCustomer() {
        List<Customer> customerList = customerService.getAllCustomer();
        return new ResponseEntity<>(customerList, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<List<Customer>> createCustomer(@RequestBody Customer customer)
    {
        List<Customer> customerList = customerService.createCustomer(customer);
        return new ResponseEntity<>(customerList, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Optional<Customer>> findCustomer(@PathVariable("id") String id)
    {
        Optional<Customer> cst = customerService.findCustomer(id);
        return new ResponseEntity<>(cst, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<List<Customer>> updateCustomer(@RequestBody Customer customer)
    {
        List<Customer> customerList = customerService.updateCustomer(customer);
        return new ResponseEntity<>(customerList, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCustomer(@PathVariable("id") String id)
    {
        customerService.deleteCustomer(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
