import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/entity/customer';
import { CustomerService } from 'src/app/services/customer.service';

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
    if(this.customer.fullName == null || this.customer.fullName==""){
      alert("Nama tidak boleh kosong");
    } else if (this.customer.nik == null){
      alert("NIK harus diisi");
    } else if (isNaN(this.customer.nik)){
      alert("NIK harus diisi dengan angka");
    } else if (this.customer.gender == null || this.customer.gender==""){
      alert("Jenis Kelamin harus diisi");
    } else if (this.customer.phoneNumber == null || this.customer.phoneNumber==""){
      alert("Nomor telepon harus diisi");
    } else if(this.customer.address == null || this.customer.address==""){
      alert("Alamat tidak boleh kosong");
    } else {
      this.cs.updateCustomer(this.customer).subscribe(
        data=>{
          console.log(data);
          this.back();
        }, error=> console.error(error) 
      );
    }
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
