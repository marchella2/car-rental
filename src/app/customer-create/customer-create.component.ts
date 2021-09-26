import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customer : Customer = new Customer();

  constructor(private cs: CustomerService, private router: Router) { }

  ngOnInit() {
  }


  back(){
    this.router.navigate(['customer']);
  }

  save(){
    this.cs.createCustomer(this.customer).subscribe(
      data=>{
        console.log(data);
        this.back()
      }, error=> console.log(error)
    );
  }

  submit(){
    this.save();
  }

}
