import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/entity/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Observable<Customer[]>;

  constructor(private customerService: CustomerService, private router: Router) { }

  reload()
  {
    this.customers = this.customerService.getCustomerList();
  }

  goToCreate(){
    this.router.navigate(['addCustomer']);
  }

  goToDetail(id: String)
  {
    this.router.navigate(['detailCustomer', id]);
  }

  goToUpdate(id: String)
  {
    this.router.navigate(['updateCustomer', id]);
  }

  deleteCustomer(id: String)
  {
    this.customerService.deleteCustomer(id).subscribe(
      data=>{
        console.log(data);
        this.reload();
      }, error=>console.log(error)
    );
  }

  ngOnInit() {
    this.reload();
  }

}
