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

  getCustomer(){
    this.customerService.getCustomerList().subscribe(
      data=>{
        this.customer = data;
      },
      (err: HttpErrorResponse)=>{
        console.log(err.message);
      }
    );
  }

 getDriver(){
    this.transactionservice.getDriver().subscribe(
      data=>{
        this.driver = data;
      },
      (err: HttpErrorResponse)=>{
        console.log(err.message);
      }
    );
  }

  getVehicle(){
    this.transactionservice.getVehicle().subscribe(
      data=>{
        this.vehicle = data;
      },
      (err: HttpErrorResponse)=>{
        console.log(err.message);
      }
    );
  }

  back()
  {
    this.router.navigate(['transaction']);
  }

  save(){
    this.transactionservice.createTransaction(this.transaction).subscribe(
      data=>{
        this.transaction = data;
        alert("Berhasil")
        this.back();
      },
      (err: HttpErrorResponse)=>{
        console.log(err.message);
      }
    );
  }

  submit(){
    this.save();
  }

}