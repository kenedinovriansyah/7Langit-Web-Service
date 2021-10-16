import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserRegisterAction } from 'src/store/actions/user.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  username = '';
  email = '';
  password = '';
  confirmation = '';
  invalid = true;
  disabled = true;

  constructor(private store: Store) {}

  change(val: string, type: string) {
    switch (type) {
      case 'username':
        this.username = val;
        break;
      case 'email':
        const r =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.invalid = Boolean(!r.test(val));
        this.email = val;
        break;
      case 'password':
        this.password = val;
        break;
      case 'confirmation':
        this.confirmation = val;
        break;
      default:
        break;
    }
    if (
      Boolean(this.username.length) &&
      Boolean(this.email.length) &&
      Boolean(this.password.length) &&
      Boolean(this.confirmation.length)
    ) {
      if (!this.invalid) this.disabled = false;
    } else this.disabled = true;
  }

  submit() {
    this.store.dispatch(
      new UserRegisterAction({
        username: this.username,
        email: this.email,
        password: this.password,
        confirmation: this.confirmation,
      })
    );
  }

  ngOnInit(): void {}
}
