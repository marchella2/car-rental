package com.example.carrental.services;

import com.example.carrental.models.Customer;
import com.example.carrental.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    public CustomerService(CustomerRepository cstRepo)
    {
        this.customerRepository = cstRepo;
    }

    public List<Customer> getAllCustomer()
    {
        return customerRepository.findAll();
    }

    public List<Customer> createCustomer(Customer customer){
        customerRepository.save(customer);
        return customerRepository.findAll();
    }

    public Optional<Customer> findCustomer(String id)
    {
        return customerRepository.findById(id);
    }

    public void deleteCustomer(String id){
        customerRepository.deleteById(id);
    }

    public List<Customer> updateCustomer(Customer customer)
    {
        customerRepository.save(customer);
        return customerRepository.findAll();
    }
}
