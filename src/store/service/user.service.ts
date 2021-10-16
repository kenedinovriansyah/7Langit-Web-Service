import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../selector/user.selector';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export default class UserService {
  constructor(private http: HttpClient) {}

  public loginAccounts(val: User) {
    return this.http
      .post('http://localhost:8000/api-auth-token/', val)
      .pipe(delay(500));
  }

  public registerAccounts(val: User) {
    return this.http
      .post('http://localhost:8000/api/v1/user', val)
      .pipe(delay(500));
  }
}
