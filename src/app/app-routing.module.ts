import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, UnAuthGuard } from 'src/store/service/guard.service';
import { BaseComponent } from './pages/base/base.component';
import { EventMusicComponent } from './pages/event-music/event-music.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
  },
  {
    path: 'event-music',
    component: EventMusicComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register-accounts',
    component: RegisterComponent,
    canActivate: [UnAuthGuard],
  },
  {
    path: 'login-accounts',
    component: LoginComponent,
    canActivate: [UnAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
