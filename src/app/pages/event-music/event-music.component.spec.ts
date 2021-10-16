import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMusicComponent } from './event-music.component';

describe('EventMusicComponent', () => {
  let component: EventMusicComponent;
  let fixture: ComponentFixture<EventMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventMusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
