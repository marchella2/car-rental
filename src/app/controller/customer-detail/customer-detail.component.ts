import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/entity/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  id: String;
  customer: Customer;
  
  constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerService) { }

  back()
  {
    this.router.navigate(['customer']);
  }
  
  ngOnInit() {
    this.customer = new Customer();
    
    this.id = this.route.snapshot.params['id'];

    this.customerService.findCustomer(this.id).subscribe(
      data=>{console.log(data);
        this.customer = data;
      }, error=>console.log(error)
    );
  }

}
