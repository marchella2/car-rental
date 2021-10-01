import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/entity/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Driver } from 'src/app/entity/driver';
import { Transaction } from 'src/app/entity/transaction';
import { TransactionService } from 'src/app/services/transaction.service';
import { Vehicle } from 'src/app/entity/vehicle';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {

  customer:Observable<Customer[]>
  driver:Observable<Driver[]>
  vehicle:Observable<Vehicle[]>
  transaction:Transaction = new Transaction();

  constructor(private router:Router,private transactionservice:TransactionService,private customerService:CustomerService) { }
  
  ngOnInit() {
    this.getCustomer();
    this.getDriver();
    this.getVehicle();
  }

  public getCustomer(){
    this.customerService.getCustomerList().subscribe(
      data=>{
        this.customer = data;
      },
      (err: HttpErrorResponse)=>{
        console.log(err.message);
      }
    );
  }

  public getDriver(){
    this.transactionservice.getDriver().subscribe(
      data=>{
        this.driver = data;
      },
      (err: HttpErrorResponse)=>{
        console.log(err.message);
      }
    );
  }

  public getVehicle(){
    this.transactionservice.getVehicle().subscribe(
      data=>{
        this.vehicle = data;
      },
      (err: HttpErrorResponse)=>{
        console.log(err.message);
      }
    );
  }

  save(){
   if(this.transaction.custId == null || this.transaction.custId == ""){
     alert("Customer harus dipilih");
   } else if (this.transaction.vehicleId == null || this.transaction.vehicleId == ""){
     alert("Vehicle tidak boleh kosong"); 
   } else if (this.transaction.dateReturn == null) {
     alert("Tanggal harus diisi");
   }else {
    this.transactionservice.createTransaction(this.transaction).subscribe(
      data=>{
        alert("Berhasil")
      },
      (err: HttpErrorResponse)=>{
        console.log(err.message);
      }
    );
   }
  }

  submit(){
    this.save();
  }

}