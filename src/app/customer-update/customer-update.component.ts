import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  customer: Customer;
  id: String;

  constructor(private route: ActivatedRoute, private router: Router, private cs: CustomerService ) { }

  back(){
    this.router.navigate(['customer'])
  }

  save(){
    this.cs.createCustomer(this.customer).subscribe(
      data=>{
        console.log(data);
        this.back();
      }, error=> console.error(error) 
    );
  }

  submit(){
    this.save();
  }


  ngOnInit() {

    this.customer = new Customer();

    this.id = this.route.snapshot.params['id']

    this.cs.findCustomer(this.id).subscribe(
      data=>{
        this.customer = data;
      }, error=> console.log(error)
    );

  }

}
