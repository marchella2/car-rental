package com.example.carrental.repositories;

import com.example.carrental.models.RentalTrans;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentalRepository extends JpaRepository<RentalTrans, String> {
}
