export interface Schedulers {
  public_id: string;
  start_date: string;
  end_date: string;
}

export interface Category {
  public_id: string;
  name: string;
  status: string;
}

export interface Event {
  public_id?: string;
  name?: string;
  banner?: string;
  start_date?: string;
  end_date?: string;
  location?: string;
  address?: string;
  country?: string;
  province?: string;
  district?: string;
  region?: string;
  organization_name?: string;
  category?: Category;
  schedulers?: Schedulers;
}

export interface EventState {
  readonly all: Array<Event>;
  readonly data: Event;
}

export enum EventTypes {
  all = '[Event] :: All',
  detail = '[Event] :: Detail',
}
