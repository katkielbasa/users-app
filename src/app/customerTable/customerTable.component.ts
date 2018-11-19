import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Customer } from '../_models';
import { CustomerService, AlertService } from '../_services';
import { SortEvent } from 'primeng/api';
import { first } from 'rxjs/operators';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

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
    private alertService: AlertService,
    private translate: TranslateService
) {
 }

  ngOnInit() {
    //this.customerService.getCustomersSmall().then(customers => this.customers = customers);
    this.loadAllCustomers();

    this.cols = [
      { field: 'first_name', header: this.translate.instant('labels.first_name') },
      { field: 'last_name', header: this.translate.instant('labels.last_name')  },
      { field: 'birthdate', header: this.translate.instant('labels.birthdate') },
      { field: 'height', header: this.translate.instant('labels.height')},
      { field: 'club_member', header: this.translate.instant('labels.club_member') }
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