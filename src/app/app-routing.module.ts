import { LoginComponent } from './auth/login/login.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { MovieComponent } from './pages/movie/movie.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: AppComponent, children:[
    {path: '', component: HomeComponent},
    {path: 'information', component: PersonalComponent},
    { path: 'movie', component: MovieComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
