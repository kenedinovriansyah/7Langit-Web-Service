import { Action } from '@ngrx/store';
import { Message, MessageTypes } from '../selector/message.selector';

export class MessageOpAction implements Action {
  readonly type: string = MessageTypes.open;
  constructor(public payload?: Message | any) {}
}

export class MessageClAction implements Action {
  readonly type: string = MessageTypes.close;
  constructor(public payload?: Message | any) {}
}

export type MessageAction = MessageOpAction | MessageClAction;
