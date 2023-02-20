import { LoginComponent } from './auth/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Components
import { SideMenuComponent } from 'src/core/components/side-menu/side-menu.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { NavMenuComponent } from 'src/core/components/nav-menu/nav-menu.component';
import { MovieComponent } from './pages/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideMenuComponent,
    MovieComponent,
    NavMenuComponent,
    HomeComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
