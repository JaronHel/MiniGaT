import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-color-converter',
  standalone: true,
  imports: [
    FormsModule,
    MatIcon
  ],
  templateUrl: './color-converter.component.html',
  styleUrl: './color-converter.component.scss'
})
export class ColorConverterComponent implements OnInit {
  red: number = 0;
  green: number = 0;
  blue: number = 0;
  hexa: string = '';
  rgbColor: string = 'rgb(0, 0, 0)';

  ngOnInit(): void {
    this.updateColor();
  }

  converted(): string {
    this.hexa = `#${this.toHex(this.red)}${this.toHex(this.green)}${this.toHex(this.blue)}`;
    return this.hexa;
  }

  private toHex(value: number): string {
    return value.toString(16).padStart(2, '0').toUpperCase();
  }

  updateColor(): void {
    this.red = this.clampValue(this.red);
    this.green = this.clampValue(this.green);
    this.blue = this.clampValue(this.blue);

    this.converted();
    
    this.rgbColor = `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  private clampValue(value: number): number {
    return Math.min(255, Math.max(0, value));
  }

  toRgb(): void {
    if (this.hexa.length === 7 && this.hexa[0] === '#') {
      const r = parseInt(this.hexa.slice(1, 3), 16);
      const g = parseInt(this.hexa.slice(3, 5), 16);
      const b = parseInt(this.hexa.slice(5, 7), 16);

      if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
        this.red = r;
        this.green = g;
        this.blue = b;
        this.updateColor();
      }
    }
  }

  copyRgb(): void {
    navigator.clipboard.writeText(`rgb(${this.red}, ${this.green}, ${this.blue})`);
  }
  
  copyHex(): void {
    navigator.clipboard.writeText(`#${this.toHex(this.red)}${this.toHex(this.green)}${this.toHex(this.blue)}`);
  }
}
