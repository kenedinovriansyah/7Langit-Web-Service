import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EventAllAction } from 'src/store/actions/event.actions';
import { Event, EventState } from 'src/store/selector/event.selector';

@Component({
  selector: 'app-event-music',
  templateUrl: './event-music.component.html',
  styleUrls: ['./event-music.component.scss'],
})
export class EventMusicComponent implements OnInit {
  event!: Array<Event>;

  constructor(private store: Store<{ event: EventState }>) {
    this.store
      .select((data) => data.event)
      .subscribe((res) => {
        this.event = res.all;
      });
  }

  ngOnInit(): void {
    this.store.dispatch(new EventAllAction());
  }
}
