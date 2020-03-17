import { Component, OnInit } from '@angular/core';
import { PasswordDirective } from 'src/app/directives/password.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private passShown = false;

  constructor(private pwdDir: PasswordDirective, private router: Router) { }

  ngOnInit() {
  }

  togglePassword() {
    const pwd = document.getElementsByName('password');
    parent.addEventListener('click', (event) => {
      this.passShown = !this.passShown;
      pwd.forEach(passwordNode => {
        this.pwdDir.toggle(passwordNode, this.passShown);
      });
    });
  }

  tryLogin() {
    // authguard is go
    if (true) {
      this.router.navigate(['home']);
    }
  }

}
