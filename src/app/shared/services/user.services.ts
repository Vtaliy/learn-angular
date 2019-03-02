import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';

@Injectable()
export class UserServices {
    constructor(private http: HttpClient) {}

// getUserByEmail (email: string): Observable<any> {
//     return this.http.get('http://localhost:4300/user?email=${email}')
//         .map((response: Response) => response.json())
//         .map((user: User) => console.log(user));
//      }
}
