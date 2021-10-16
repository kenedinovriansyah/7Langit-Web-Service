import { UserAction } from '../actions/user.actions';
import { UserState, UserTypes } from '../selector/user.selector';

const initialState: UserState = {
  user: [],
  data: {
    id: '',
    username: '',
    email: '',
    password: '',
    confirmation: '',
  },
};

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
) => {
  switch (action.type) {
    default:
      return state;
      break;
  }
};
