import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './entry/login/login.component';
import { SignupComponent } from './entry/signup/signup.component';
import { SplashComponent } from './entry/splash/splash.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomeComponent } from './main/home/home.component';
import { PasswordDirective } from './directives/password.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SplashComponent,
    NotFoundComponent,
    HomeComponent,
    PasswordDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
