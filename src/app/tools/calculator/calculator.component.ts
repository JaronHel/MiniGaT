import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { evaluate } from 'mathjs';

@Component({
  selector: 'app-calculator',
  imports: [
    FormsModule
  ],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  display: string = "";

  public onRemove() {
    this.display = this.display.slice(0, -1);
  }

  public onButton(buttonValue: string) {
    this.display += buttonValue;
  }

  public onClear() {
    this.display = "";
  }

  public onCalculate() {
    try {
      this.display = evaluate(this.display).toString();
    } catch (error) {
      this.onClear()
    }
  }
}
