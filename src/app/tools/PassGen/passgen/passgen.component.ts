import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-passgen',
  standalone: true,
  imports: [
    FormsModule,
    MatIcon
  ],
  templateUrl: './passgen.component.html',
  styleUrl: './passgen.component.scss'
})

export class PassgenComponent {
  password: string = '';
  inputLength: number = 12;
  passwordEl: string = "Generate a Password";

  generatePassword(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let password = '';
    const array = new Uint32Array(length);

    window.crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
      password += characters[array[i] % characters.length];
    }
    this.passwordEl = password;
    return password;
  }

  generate(): void {
    this.password = this.generatePassword(this.inputLength);
  }

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.password)
  }
}
