import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory',
  standalone: true,
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit {
  cardsEl: HTMLElement[] = [];
  resetEl!: HTMLElement;
  variants: string[] = [
    "Owl", "Pig", "Goat", "Sheep", "Deer", "Elefant", "Hipo", "Mouse",
    "Cat", "Eagle", "Dog", "Hedgedog"
  ];
  pairVariants: string[] = [];
  openCards: HTMLElement[] = [];
  matchedPairs: number = 0;

  ngOnInit(): void {
    this.initializeGame();
  }

  private initializeGame(): void {
    this.cardsEl = Array.from({ length: 24 }, (_, i) => document.getElementById(`card${i + 1}`)!);
    this.resetEl = document.getElementById("reset")!;
    this.resetEl.addEventListener("click", () => this.reset());

    this.shuffleVariants();
    this.fillCards();
    this.addCardClickListeners();
  }

  private shuffleVariants(): void {
    this.pairVariants = this.variants.flatMap(item => [item, item]);
    for (let i = this.pairVariants.length - 1; i > 0; i--) {
      const randomMix = Math.floor(Math.random() * (i + 1));
      [this.pairVariants[i], this.pairVariants[randomMix]] = [this.pairVariants[randomMix], this.pairVariants[i]];
    }
  }

  private fillCards(): void {
    this.cardsEl.forEach((card, i) => {
      card.textContent = this.pairVariants[i];
      card.classList.add("hidden");
    });
  }

  private reset(): void {
    this.cardsEl.forEach(card => { card.textContent = ""; card.classList.add("hidden"); });
    this.openCards = [];
    this.matchedPairs = 0;
    this.shuffleVariants();
    this.fillCards();
  }

  private addCardClickListeners(): void {
    this.cardsEl.forEach(card => {
      card.addEventListener("click", () => this.onCardClick(card));
    });
  }

  private onCardClick(card: HTMLElement): void {
    if (!card.classList.contains("hidden") || this.openCards.length === 2) return;

    card.classList.remove("hidden");
    this.openCards.push(card);

    if (this.openCards.length === 2) {
      const [firstCard, secondCard] = this.openCards;
      if (firstCard.textContent === secondCard.textContent) {
        this.matchedPairs++;
        this.openCards = [];
        if (this.matchedPairs === this.variants.length) {
          alert("You won!");
        }
      } else {
        setTimeout(() => {
          firstCard.classList.add("hidden");
          secondCard.classList.add("hidden");
          this.openCards = [];
        }, 1000);
      }
    }
  }
}
