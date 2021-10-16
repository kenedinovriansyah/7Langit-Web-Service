import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { MessageOpAction } from '../actions/message.actions';
import { UserLoginAction, UserRegisterAction } from '../actions/user.actions';
import { UserTypes } from '../selector/user.selector';
import UserService from '../service/user.service';
import cookies from 'cookies-js';
import { Router } from '@angular/router';

@Injectable()
export default class UserEffects {
  constructor(
    private action$: Actions,
    private service: UserService,
    private router: Router
  ) {}

  @Effect() loginAccounts$ = this.action$.pipe(
    ofType<UserLoginAction>(UserTypes.login),
    exhaustMap((data) =>
      this.service.loginAccounts((data as any).payload).pipe(
        map((data: any) => {
          cookies.set('token', data.token);
          window.location.reload();
          return new UserLoginAction();
        }),
        catchError((err) => {
          return of(
            new MessageOpAction({
              message: err.error.non_field_errors[0],
              valid: false,
              show: 1,
            })
          );
        })
      )
    )
  );

  @Effect() registerAccounts$ = this.action$.pipe(
    ofType<UserRegisterAction>(UserTypes.register),
    exhaustMap((data: any) =>
      this.service.registerAccounts(data.payload).pipe(
        map((data: any) => {
          this.router.navigateByUrl('login-accounts');
          return new MessageOpAction({
            message: data.message,
            show: 1,
            valid: true,
          });
        }),
        catchError((err) => {
          return of(
            new MessageOpAction({
              message: err.error.message,
              show: 1,
              valid: false,
            })
          );
        })
      )
    )
  );
}
