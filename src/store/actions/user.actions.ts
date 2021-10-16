import { Action } from '@ngrx/store';
import { User, UserTypes } from '../selector/user.selector';

export class UserLoginAction implements Action {
  readonly type: string = UserTypes.login;
  constructor(public payload?: User) {}
}

export class UserRegisterAction implements Action {
  readonly type: string = UserTypes.register;
  constructor(public payload?: User) {}
}

export type UserAction = UserLoginAction | UserRegisterAction;
