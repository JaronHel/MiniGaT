import { Component, HostListener, ElementRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    imports: [
        MatIconModule,
        MatMenuModule,
        CommonModule,
        RouterOutlet,
        RouterLink,
        FormsModule
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  LoginDisabled = true;
  isMenuOpen = false;
  searchTerm: string = "";
  suggestions: string[] = [
    "blackjack", "memory", "higher or lower", "slots", "passgen", "colorconverter", "qrgen", "calculator"
  ];
  filteredSuggestions: string[] = [];
  selectedIndex: number = -1;

  constructor(private eRef: ElementRef, private router: Router) {}

  onSearch() {
    const lowerSearchTerm = this.searchTerm.toLowerCase();
    if (this.suggestions.includes(lowerSearchTerm)) {
      switch (lowerSearchTerm) {
        case "blackjack":
          this.router.navigate(['games/blackjack']);
          break;
        case "memory":
          this.router.navigate(['games/memory']);
          break;
        case "higher or lower":
          this.router.navigate(['games/higherorlower']);
          break;
        case "slots":
          this.router.navigate(['games/slots']);
          break;
        case "passgen":
          this.router.navigate(['tools/passgen']);
          break;
        case "colorconverter":
          this.router.navigate(['tools/colorconverter']);
          break;
        case "qrgen":
          this.router.navigate(['tools/qrgen']);
          break;
        case "calculator":
          this.router.navigate(['tools/calculator']);
          break;
      }
    }
  }

  onInputChange() {
    this.filteredSuggestions = this.suggestions.filter(suggestion => 
      suggestion.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.selectedIndex = -1;
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      if (this.filteredSuggestions.length > 0) {
        this.selectedIndex = (this.selectedIndex + 1) % this.filteredSuggestions.length;
        this.searchTerm = this.filteredSuggestions[this.selectedIndex];
      }
    }
  }

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
