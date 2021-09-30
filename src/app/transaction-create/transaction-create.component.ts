import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Driver } from '../driver';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';
import { Vehicle } from '../vehicle';

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

  getVehicle(){
    this.transactionservice.getVehicle().subscribe(
      data=>{
        this.customer = data;
      },
      (err: HttpErrorResponse)=>{
        console.log(err.message);
      }
    );
  }

  save(){
    this.transactionservice.createTransaction(this.transaction).subscribe(
      data=>{
        alert("Berhasil")
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
