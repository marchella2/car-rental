package com.example.carrental.repositories;

import com.example.carrental.models.RentalTrans;
import com.example.carrental.models.Temporary.RentalTransaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RentalRepository extends JpaRepository<RentalTrans, String> {

    @Query(value = "select t.id as id, c.full_name as fullName, v.vhc_model as vhcModel, v.vhc_name as vhcName, d.driver_name as driverName, t.date_rent as dateRent, t.date_return as dateReturn, t.status as status, t.total_price as totalPrice from trx_transaction t\n" +
            "inner join mst_customer c on t.cust_id = c.id\n" +
            "inner join mst_vehicle v on t.vehicle_id = v.id\n" +
            "left join mst_driver d on t.driver_id = d.id"
            , nativeQuery = true)

    public List<RentalTransaction> showAllTransaction();


}


