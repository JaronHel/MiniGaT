import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-passgen',
  standalone: true,
  imports: [FormsModule, MatIcon],
  templateUrl: './passgen.component.html',
  styleUrls: ['./passgen.component.scss']
})
export class PassgenComponent {
  password: string = '';
  inputLength: number = 12;

  generatePassword(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&()_+~`|}{[]:;?><,./-=';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  }

  generate(): void {
    console.log('inputLength:', this.inputLength);

    if (this.inputLength > 30) {
      this.password = "The max password length is 30! You won't need any longer one!";
    } else if (this.inputLength < 1) {
      this.password = "Password length must be at least 1!";
    } else {
      this.password = this.generatePassword(this.inputLength);
    }
  }

  validateInputLength(): void {
    if (this.inputLength < 6) {
      this.inputLength = 6;
    } else if (this.inputLength > 30) {
      this.inputLength = 30;
    }
  }

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.password);
  }
}
