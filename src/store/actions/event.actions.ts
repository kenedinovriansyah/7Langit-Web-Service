import { Action } from '@ngrx/store';
import { EventTypes } from '../selector/event.selector';

export class EventAllAction implements Action {
  readonly type: string = EventTypes.all;
  constructor(public payload?: Array<Event> | any) {}
}

export class EventDetailAction implements Action {
  readonly type: string = EventTypes.detail;
  constructor(public payload?: Event | any) {}
}

export type EventAction = EventAllAction | EventDetailAction;
