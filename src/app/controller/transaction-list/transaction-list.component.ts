import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/entity/transaction';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transaction:Observable<Transaction[]>;

  constructor(private router:Router,private transactionService:TransactionService) { }

  reload() {
    this.transaction=this.transactionService.getTransaction();
  }

  goToCreate(){
    this.router.navigate(['addTransaction']);
  }


  finish(id: String)
  {
    this.transactionService.finishTransaction(id).subscribe(
      data=>{
        console.log(data);
        this.reload();
      },
      error=> console.log(error)
    );
  }

  ngOnInit(){
    this.reload();
  }
}