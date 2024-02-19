import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  password = '';
  repeatPassword = '';

  onChangePassword(event: Event): void {
    this.password = (event.target as HTMLInputElement).value;
  }

  onChangePasswordRepeat(event: Event): void {
    this.repeatPassword = (event.target as HTMLInputElement).value;
  }
}
