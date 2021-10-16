import { EventAction } from '../actions/event.actions';
import { EventState, EventTypes } from '../selector/event.selector';

const initialState: EventState = {
  all: [],
  data: {},
};

export const eventReducer = (
  state: EventState = initialState,
  action: EventAction
) => {
  switch (action.type) {
    case EventTypes.all:
      return { ...state, all: action.payload };
      break;
    case EventTypes.detail:
      return { ...state, data: action.payload };
      break;

    default:
      return state;
      break;
  }
};
