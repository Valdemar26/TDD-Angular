import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  username = '';
  email = '';
  password = '';
  repeatPassword = '';

  onChangeUsername(event: Event): void {
    this.username = (event.target as HTMLInputElement).value;
  }

  onChangeEmail(event: Event): void {
    this.email = (event.target as HTMLInputElement).value;
  }

  onChangePassword(event: Event): void {
    this.password = (event.target as HTMLInputElement).value;
  }

  onChangePasswordRepeat(event: Event): void {
    this.repeatPassword = (event.target as HTMLInputElement).value;
  }

  signUp(): void {
    fetch("api/1.0/users", {
      method: 'POST',
      body: JSON.stringify({username: this.username, password: this.password, email: this.email}),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
}
