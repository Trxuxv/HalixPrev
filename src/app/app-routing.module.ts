import { LoginComponent } from './auth/login/login.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'home',
    component: AppComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ]
  },
  {
    path: 'information',
    component: PersonalComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
