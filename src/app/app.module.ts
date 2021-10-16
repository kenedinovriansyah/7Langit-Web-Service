import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import UserEffects from 'src/store/effects/user.effects';
import { messageReducer } from 'src/store/reducers/message.reducers';
import { userReducer } from 'src/store/reducers/user.reducers';
import { AuthGuard, UnAuthGuard } from 'src/store/service/guard.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './pages/base/base.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { EventMusicComponent } from './pages/event-music/event-music.component';
import { eventReducer } from 'src/store/reducers/event.reducer';
import EventEffects from 'src/store/effects/event.effects';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    LoginComponent,
    RegisterComponent,
    EventMusicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        m: 59,
      },
    }),
    EffectsModule.forRoot([UserEffects, EventEffects]),
    StoreModule.forRoot({
      message: messageReducer,
      user: userReducer,
      event: eventReducer,
    }),
  ],
  providers: [AuthGuard, UnAuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
