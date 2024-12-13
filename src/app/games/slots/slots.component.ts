import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slots',
  imports: [
    FormsModule
  ],
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss']
})

export class SlotsComponent {
  btnSpinDisabled: boolean = false;
  money: number = 1000;
  raw1: string = "💎";
  raw2: string = "💎";
  raw3: string = "💎";
  slotOptions: string[] = ["🍌", "🍌", "🍌", "🍌", "🍉", "🍉", "🍉", "🍉", "🍊", "🍊", "🍊", "🍊", "🍒", "🍒", "🍒", "⭐", "⭐", "💎"];

  private shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  private genRandom(raw: string) {
    return this.slotOptions[Math.floor(Math.random() * this.slotOptions.length)];
  }

  private checkWinner() {
    if ((this.raw1 == "🍌" && this.raw2 == "🍌" && this.raw3 == "🍌") || (this.raw1 == "🍊" && this.raw2 == "🍊" && this.raw3 == "🍊")) {
      this.money += 150;
    } else if (this.raw1 == "🍒" && this.raw2 == "🍒" && this.raw3 == "🍒") {
      this.money += 400;
    } else if (this.raw1 == "⭐" && this.raw2 == "⭐" && this.raw3 == "⭐") {
      this.money += 1000;
    } else if (this.raw1 == "💎" && this.raw2 == "💎" && this.raw3 == "💎") {
      this.money += 10000;
    }
  }

  public onSpin() {
    this.btnSpinDisabled = true;
    this.money -= 50;

    this.shuffleArray(this.slotOptions);

    setTimeout(() => {
      this.raw1 = this.genRandom(this.raw1);
      setTimeout(() => {
        this.raw2 = this.genRandom(this.raw2);
        setTimeout(() => {
          this.raw3 = this.genRandom(this.raw3);

          setTimeout(() => {
            this.checkWinner();
            this.btnSpinDisabled = false;
          }, 250);
        }, 500);
      }, 500);
    }, 500);
  }
}
