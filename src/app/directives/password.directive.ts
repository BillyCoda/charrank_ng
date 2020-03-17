import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPassword]'
})
export class PasswordDirective {
  private shown = false;

  constructor(
    // private el: ElementRef
    ) {
    // this.setup();
  }

  toggle(span: HTMLElement, bool: boolean) {
    if (bool) {
      span.setAttribute('type', 'text');
    } else {
      span.setAttribute('type', 'password');
    }
  }

  setup() {
    // const parent = this.el.nativeElement.parentNode;
    // const pwd = document.getElementsByName('password');
    // parent.addEventListener('click', (event) => {
    //   this.shown = !this.shown;
    //   pwd.forEach(passwordNode => {
    //     this.toggle(passwordNode);
    //   });
    // });
  }
}
