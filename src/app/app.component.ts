import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageClAction } from 'src/store/actions/message.actions';
import { Message, MessageState } from 'src/store/selector/message.selector';
import cookies from 'cookies-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  message!: Message;
  loggedIn = false;

  constructor(
    private router: Router,
    private store: Store<{ message: MessageState }>
  ) {
    this.store
      .select((data) => data.message)
      .subscribe((res) => {
        this.message = res.message;
      });
  }

  clickLogout() {
    cookies.expire('token');
    window.location.reload();
  }

  close() {
    this.store.dispatch(
      new MessageClAction({
        message: this.message.message,
        show: 2,
        valid: this.message.valid,
      })
    );
  }

  clickRouter(val: string) {
    this.router.navigateByUrl(val);
  }

  ngOnInit(): void {
    this.loggedIn = Boolean(cookies.get('token'));
  }
}
