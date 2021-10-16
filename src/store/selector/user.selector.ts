export interface User {
  id?: string;
  username?: string;
  email?: string;
  password?: string;
  confirmation?: string;
}

export interface UserState {
  readonly user: Array<User>;
  readonly data: User;
}

export enum UserTypes {
  login = '[Accounts] :: Log In',
  register = '[Accounts] :: Register',
}
