import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, UserService, CustomerService } from '../_services';

@Component({
  selector: 'app-submit-customer',
  templateUrl: './submit-customer.component.html',
  styleUrls: ['./submit-customer.component.css',
    '../../../node_modules/primeng/resources/primeng.css'
  ]
  // ,encapsulation: ViewEncapsulation.Emulated

})
export class SubmitCustomerComponent implements OnInit {

  submitCustomerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private customerService: CustomerService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.submitCustomerForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      birthdate: ['', Validators.required],
      height: ['', 
         [
          Validators.required
         ,Validators.pattern('^[0-9]+(\.[0-9]+)?$')]
       ],
      club_member: ['']
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.submitCustomerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.submitCustomerForm.invalid) {
      return;
    }

    this.loading = true;
    this.customerService.add(this.submitCustomerForm.value)
      .pipe(first())
      .subscribe(
      data => {

        this.alertService.success('Customer added', true);
        this.router.navigate(['/customers']);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }
}
