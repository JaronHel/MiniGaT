import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hol',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './hol.component.html',
  styleUrls: ['./hol.component.scss']
})
export class HolComponent {
  numberToGuess!: number;
  tries: number = 10;
  message: string = "Make your guess!";
  inputValue: number | null = null;

  constructor() {
    this.onNew();
  }

  private genRandomNum(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  public onNew(): void {
    this.numberToGuess = this.genRandomNum();
    this.inputValue = null;
    this.tries = 10;
    this.message = "Guess the Number!";
  }

  public onCheck(): void {
    if (this.tries > 0) {
      if (this.inputValue !== null && this.inputValue >= 1 && this.inputValue <= 100) {
        if (this.inputValue > this.numberToGuess) {
          this.message = "Lower";
        } else if (this.inputValue < this.numberToGuess) {
          this.message = "Higher";
        } else {
          this.message = `You guessed the right number!<br>(${this.numberToGuess})`;
        }
        this.tries--;
      } else if (this.inputValue === null) {
        this.message = "Can't check an empty field!";
      } else {
        this.message = "Invalid Number! (1-100)";
      }
    } else if (this.tries <= 0) {
      this.message = `You got no more tries :(<br>Number was: ${this.numberToGuess}`;
      this.tries = 0;
    }
  }

  public isCheckButtonDisabled(): boolean {
    return this.tries <= 0 || this.message.includes(`You guessed the right number!<br>(${this.numberToGuess})`);
  }
}
