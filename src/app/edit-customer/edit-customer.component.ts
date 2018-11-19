import { Component, OnInit } from '@angular/core';
import {CustomerService, AlertService} from "../_services";
import {Router} from "@angular/router";
import {Customer} from "../_models";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customer: Customer;
  editCustomerForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
     private customerService: CustomerService,
     private alertService: AlertService) { }

  ngOnInit() {
    let customerId = localStorage.getItem("editCustomerId");
    if(!customerId) {
      this.alertService.error("Invalid action.");
      this.router.navigate(['/customers']);
      return;
    }
    this.editCustomerForm = this.formBuilder.group({
      id: [],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      birthdate: ['', Validators.required],
      height: ['', 
         [
          Validators.required
         ,Validators.pattern('^[0-9]+(\.[0-9]+)?$')]
       ],
      club_member: ['', Validators.required]
    });
    this.customerService.getById(+customerId)
      .subscribe( data => {
        this.editCustomerForm.setValue(data);
      });
  }

  get f() { return this.editCustomerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.editCustomerForm.invalid) {
      return;
    }
    this.loading = true;

    this.customerService.update(this.editCustomerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Customer updated', true);
          this.router.navigate(['/customers']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;

        });
  }

}
