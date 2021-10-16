export interface Message {
  message: string;
  valid: boolean;
  show: number;
}

export interface MessageState {
  readonly message: Message;
}

export enum MessageTypes {
  open = '[Message] :: Open',
  close = '[Message] :: Close',
}
