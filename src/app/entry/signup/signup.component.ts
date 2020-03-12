import { Component, OnInit } from '@angular/core';
import { PasswordDirective } from 'src/app/directives/password.directive';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  private passShown = false;

  constructor(private pwdDir: PasswordDirective) { }

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
}
