import { MessageAction } from '../actions/message.actions';
import { MessageState, MessageTypes } from '../selector/message.selector';

const initialState: MessageState = {
  message: {
    message: '',
    show: 0,
    valid: false,
  },
};

export const messageReducer = (
  state: MessageState = initialState,
  action: MessageAction
) => {
  switch (action.type) {
    case MessageTypes.open:
      return { ...state, message: action.payload };
      break;
    case MessageTypes.close:
      return { ...state, message: action.payload };
      break;
    default:
      return state;
      break;
  }
};
