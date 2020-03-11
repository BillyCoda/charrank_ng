import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './entry/splash/splash.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';


const routes: Routes = [
  { path: '', component: SplashComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
