import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-passgen',
  imports: [
    FormsModule,
    MatIcon,
    MatCheckbox
  ],
  templateUrl: './passgen.component.html',
  styleUrls: ['./passgen.component.scss']
})
export class PassgenComponent {
  password: string = '';
  characters: string = '';
  lowercase: string = 'abcdefghijklmnopqrstuvwxyz';
  uppercase: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  specialChars: string = '!@#$%^&()_+~`|}{[]:;?><,./-=';
  digits: string = '0123456789';
  inputLength: number = 12;
  noCapital: boolean = false;
  noLowercase: boolean = false;
  noDigits: boolean = false;
  noSpecial: boolean = false;
  i: number = 4;

  ngOnInit(): void {
    this.generate();
  }

  checkForSpecs(): void {
    this.lowercase = this.noLowercase ? '' : 'abcdefghijklmnopqrstuvwxyz';
    this.uppercase = this.noCapital ? '' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.digits = this.noDigits ? '' : '0123456789';
    this.specialChars = this.noSpecial ? '' : '!@#$%^&()_+~`|}{[]:;?><,./-=';
    
    this.characters = this.lowercase + this.uppercase + this.digits + this.specialChars;

    this.i = [
      this.noLowercase,
      this.noCapital,
      this.noDigits,
      this.noSpecial
    ].filter(flag => !flag).length;
  }

  generatePassword(length: number): string {
    this.checkForSpecs();

    let password = '';
    if (this.lowercase) {
      password += this.lowercase.charAt(Math.floor(Math.random() * this.lowercase.length));
    }
    if (this.uppercase) {
      password += this.uppercase.charAt(Math.floor(Math.random() * this.uppercase.length));
    }
    if (this.digits) {
      password += this.digits.charAt(Math.floor(Math.random() * this.digits.length));
    }
    if (this.specialChars) {
      password += this.specialChars.charAt(Math.floor(Math.random() * this.specialChars.length));
    }

    for (let j = password.length; j < length; j++) {
      const randomIndex = Math.floor(Math.random() * this.characters.length);
      password += this.characters[randomIndex];
    }

    if (this.noLowercase && this.noCapital && this.noDigits && this.noSpecial) {
      password = '';
    }

    return password.split('').sort(() => Math.random() - 0.5).join('');
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
