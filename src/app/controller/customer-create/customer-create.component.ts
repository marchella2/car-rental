import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/entity/customer';
import { CustomerService } from 'src/app/services/customer.service';

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
      this.cs.createCustomer(this.customer).subscribe(
        data=>{
          console.log(data);
          this.back()
        }, error=> console.log(error)
      );
    }
  }

  submit(){
    this.save();
  }

}
