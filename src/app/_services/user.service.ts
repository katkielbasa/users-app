import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Constants} from '../constants'
import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${Constants.API_URL}/users`);
    }

    getById(id: number) {
        return this.http.get(`${Constants.API_URL}}/users/` + id);
    }

    register(user: User) {
        return this.http.post(`${Constants.API_URL}}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${Constants.API_URL}}/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${Constants.API_URL}}/users/` + id);
    }
}