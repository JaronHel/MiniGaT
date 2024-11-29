import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-passgen',
    imports: [FormsModule, MatIcon],
    templateUrl: './passgen.component.html',
    styleUrls: ['./passgen.component.scss']
})
export class PassgenComponent {
  password: string = '';
  inputLength: number = 12;

  ngOnInit(): void {
    this.generate();
  }

  generatePassword(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&()_+~`|}{[]:;?><,./-=';

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const specialChars = '!@#$%^&()_+~`|}{[]:;?><,./-=';

    let password = '';
    password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    password += digits.charAt(Math.floor(Math.random() * digits.length));
    password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));

    for (let i = 4; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    return password;
  }

  generate(): void {
    this.validateInputLength();
    this.password = this.generatePassword(this.inputLength);
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
