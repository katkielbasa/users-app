import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../_models';
import { Constants } from '../constants'

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomersSmall() {
    return this.http.get<any>('/assets/data/customers-small.json')
      .toPromise()
      .then(res => <Customer[]>res.data)
      .then(data => { return data; });
  }
  getById(id: number) {
    return this.http.get(`${Constants.API_URL}}/customers/` + id);
  }

  add(customer: Customer) {
    return this.http.post(`${Constants.API_URL}}/customers/add`, customer);
  }

  getAll() {
    return this.http.get<Customer[]>(`${Constants.API_URL}/customers`);
  }

  update(customer: Customer) {
    return this.http.put(`${Constants.API_URL}}/customers/` + customer.id, customer);
  }

  delete(id: number) {
    return this.http.delete(`${Constants.API_URL}}/customers/` + id);
  }
}