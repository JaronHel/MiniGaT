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
  passwordEl: string = 'Generate a Password';

  generatePassword(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&()_+~`|}{[]:;?><,./-=';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    this.passwordEl = password;
    return password;
  }

  generate(): void {
    this.password = this.generatePassword(this.inputLength);
  }

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.password);
  }
}
