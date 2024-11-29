import { Component, HostListener, ElementRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [
        MatIconModule,
        MatMenuModule,
        CommonModule,
        RouterOutlet,
        RouterLink
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {
  LoginDisabled = true;
  isMenuOpen = false;

  constructor(private eRef: ElementRef, private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  linkClicked() {
    this.isMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
    }
  }
}