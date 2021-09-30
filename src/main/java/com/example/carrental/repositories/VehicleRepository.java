package com.example.carrental.repositories;

import com.example.carrental.models.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, String> {

    List<Vehicle> findAllByVhcStatus(Boolean vhcStatus);
}
