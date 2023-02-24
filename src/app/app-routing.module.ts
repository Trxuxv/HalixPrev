import { EditAnotationComponent } from './pages/personal/anotation/edit-anotation/edit-anotation.component';
import { ReadAnotationComponent } from './pages/personal/anotation/read-anotation/read-anotation.component';
import { ListAnotationComponent } from './pages/personal/anotation/list-anotation/list-anotation.component';
import { DefaultComponent } from './pages/personal/default/default.component';
import { LoginComponent } from './auth/login/login.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { MovieComponent } from './pages/movie/movie.component';
import { AnotationComponent } from './pages/personal/anotation/anotation.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: AppComponent, children: [
      { path: '', component: HomeComponent },
      {
        path: 'information', component: PersonalComponent, children: [
          { path: '', component: DefaultComponent },
          {
            path: 'anotation', component: AnotationComponent, children: [
              { path: '', component: ListAnotationComponent},
              { path: 'read/:id', component: ReadAnotationComponent },
              { path: 'edit/:id', component: EditAnotationComponent },
            ]
          }
        ]
      },
      { path: 'movie', component: MovieComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
