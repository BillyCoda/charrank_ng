import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    const rando = Math.floor(Math.random() * 10);

    if (rando > 5) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
