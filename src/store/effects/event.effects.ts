import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { EventAllAction } from '../actions/event.actions';
import { MessageOpAction } from '../actions/message.actions';
import { EventTypes } from '../selector/event.selector';
import EventService from '../service/event.service';
import cookies from 'cookies-js';

@Injectable()
export default class EventEffects {
  constructor(private action$: Actions, private service: EventService) {}

  @Effect() allEvent$ = this.action$.pipe(
    ofType<EventAllAction>(EventTypes.all),
    exhaustMap((data) =>
      this.service.listEvent().pipe(
        map((data) => {
          return new EventAllAction(data);
        }),
        catchError((err) => {
          cookies.expire('token');
          window.location.reload();
          return err;
        })
      )
    )
  );
}
