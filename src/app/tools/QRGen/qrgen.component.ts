import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-qrgen',
  imports: [
    QRCodeComponent,
    FormsModule
  ],
  templateUrl: './qrgen.component.html',
  styleUrls: ['./qrgen.component.scss']
})
export class QRGenComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  link: string = 'https://github.com/JaronHel/MiniGaT';

}
