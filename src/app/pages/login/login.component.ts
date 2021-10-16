import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserLoginAction } from 'src/store/actions/user.actions';
import cookies from 'cookies-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  rememmber = false;

  constructor(private store: Store) {}

  change(val: any, t: string) {
    switch (t) {
      case 'username':
        this.username = val;
        break;
      case 'password':
        this.password = val;
        break;
      case 'remember':
        this.rememmber = val;
        console.log(this.rememmber);
        break;

      default:
        break;
    }
  }

  submit() {
    if (this.rememmber) {
      cookies.set('username', this.username);
      cookies.set('password', this.password);
    }
    this.store.dispatch(
      new UserLoginAction({
        username: this.username,
        password: this.password,
      })
    );
  }

  ngOnInit(): void {
    this.username = cookies.get('username');
    this.password = cookies.get('password');
  }
}
