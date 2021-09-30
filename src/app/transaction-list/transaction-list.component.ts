import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transaction:Observable<Transaction>

  constructor(private router:Router,private service:TransactionService) { }

  ngOnInit() {
    this.transaction=this.service.getTransaction();
  }

  goToCreate(){
    this.router.navigate(['transactionCreate']);
  }

  finish(id:string){
    this.service.finishTransaction(id);
  }

}
