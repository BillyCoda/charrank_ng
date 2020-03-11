import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {
  showLogin = true;
  showSignup = false;

  constructor() { }

  ngOnInit() {
  }

  toggleLogin() {
    this.showLogin = true;
    this.showSignup = false;
  }

  toggleSignup() {
    this.showLogin = false;
    this.showSignup = true;
  }

}
