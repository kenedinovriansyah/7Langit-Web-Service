import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import cookies from 'cookies-js';

@Injectable({
  providedIn: 'root',
})
export default class EventService {
  constructor(private http: HttpClient) {}

  public listEvent() {
    return this.http
      .get('http://localhost:8000/api/v1/event', {
        headers: {
          Authorization: `Bearer ${cookies.get('token')}`,
        },
      })
      .pipe(delay(500));
  }

  public detailEvent(val: string) {
    return this.http
      .get(`http://localhost:8000/api/v1/event/${val}`)
      .pipe(delay(500));
  }
}
