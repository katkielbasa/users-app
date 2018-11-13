import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Customer } from '../_models';
import { CustomerService, AlertService } from '../_services';
import { SortEvent } from 'primeng/api';
import { first } from 'rxjs/operators';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './customerTable.component.html',
  styleUrls: ['./customerTable.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class CustomerTableComponent implements OnInit {
  customers: Customer[];

  cols: any[];

  club_member: SelectItem[];


  constructor(private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService) { }

  ngOnInit() {
    //this.customerService.getCustomersSmall().then(customers => this.customers = customers);
    this.loadAllCustomers();

    this.cols = [
      { field: 'first_name', header: 'First Name' },
      { field: 'last_name', header: 'Last Name' },
      { field: 'birthday', header: 'Birthday' },
      { field: 'height', header: 'Height' },
      { field: 'club_member', header: 'Club Member' }
    ];


    this.club_member = [
      { label: 'true', value: 'Yes' },
      { label: 'false', value: 'No' }
    ]
  }


  deleteCustomer(id: number) {
    this.customerService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllCustomers()
    });
  }

  editCustomer(customer: Customer): void {
    localStorage.removeItem("editCustomerId");
    localStorage.setItem("editCustomerId", customer.id.toString());
    this.router.navigate(['/update']);
  };


  private loadAllCustomers() {
    this.customerService.getAll().pipe(first()).subscribe(customers => {
      this.customers = customers;
    });
  }
}