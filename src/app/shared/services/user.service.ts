import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {User} from '../models/user.model';
import 'rxjs-compat/add/operator/map';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) {}

getUserByEmail (email: string): Observable<any> {
    return this.http.get(`http://localhost:3000/users?email=${email}`)
    .map((user: User[]) => user[0] ? user[0] : undefined);
     }

    createNewUser(user: User): Observable<any> {
        return this.http.post(`http://localhost:3000/users`, user);
    }
}


