import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    imports: [
        NgIf,
        FormsModule
    ],
    templateUrl: './blackjack.component.html',
    styleUrl: './blackjack.component.scss'
})
export class BlackjackComponent {
  cardValues: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K", "Q", "A"];
  cardValuesMap: { [key: string]: number } = {
    "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9,
    "10": 10, "J": 10, "K": 10, "Q": 10, "A": 11
  };

  deck: string[] = [];
  dealerHand: string[] = [];
  playerHand: string[] = [];
  money: number = 1000;
  bet: number = 0;
  playerHasStood = false;
  splitPossible = false;
  message = '';

  btnNewDisabled = false;
  btnHitDisabled = true;
  btnStandDisabled = true;
  btnDoubleDisabled = true;
  dealerHandHidden = true;

  inputBetReadonly = false;

  private startOfGame() {
    this.deck = [];
    this.dealerHand = [];
    this.playerHand = [];
    this.playerHasStood = false;
    this.message = '';
    this.btnNewDisabled = true;
    this.btnHitDisabled = false;
    this.btnStandDisabled = false;
    this.dealerHandHidden = true;
    this.inputBetReadonly = true;
    
    if ((this.bet * 2) > this.money || this.bet <= 0) {
      this.btnDoubleDisabled = true;
    }
    else {
      this.btnDoubleDisabled = false;
    }

    if (this.money >= this.bet && this.bet > 0) {
      this.money = this.money - this.bet;
    }
    else {
      this.bet = 0;
    }

    this.createDeck();
    this.shuffleDeck();
    this.playerHand.push(this.takeCard());
    this.dealerHand.push(this.takeCard());
    this.playerHand.push(this.takeCard());
    this.dealerHand.push(this.takeCard());

    if (this.checkBlackjack()) {
      this.showCards();
      this.endOfGame();
    } else {
      this.updateUI();
    }
  }

  private endOfGame() {
    this.btnNewDisabled = false;
    this.btnHitDisabled = true;
    this.btnStandDisabled = true;
    this.btnDoubleDisabled = true;
    this.dealerHandHidden = false;
    this.inputBetReadonly = false;
  }

  private createDeck() {
    for (let value of this.cardValues) {
      for (let i = 0; i < 4; i++) {
        this.deck.push(value);
      }
    }
  }

  private shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }

  private takeCard(): string {
    return this.deck.pop()!;
  }

  public calculateHandValue(hand: string[]): number {
    let value = 0;
    let acesCount = 0;

    for (let card of hand) {
      value += this.cardValuesMap[card];
      if (card === "A") acesCount++;
    }

    while (value > 21 && acesCount > 0) {
      value -= 10;
      acesCount--;
    }

    return value;
  }

  private updateUI() {
    if (this.playerHasStood) {
      this.dealerHandHidden = false;
    }
  }

  private showCards() {
    this.dealerHandHidden = false;
  }

  private checkWinner(): boolean {
    const dealerValue = this.calculateHandValue(this.dealerHand);
    const playerValue = this.calculateHandValue(this.playerHand);

    if (dealerValue > 21) {
      this.message = "Dealer lost due to overdrawing! YOU win!";
      this.money += this.bet * 2;
      this.endOfGame();
      return true;
    } else if (playerValue > 21) {
      this.message = "You lost due to overdrawing! DEALER wins!";
      this.endOfGame();
      return true;
    } else if (dealerValue > playerValue) {
      this.message = "Dealer wins!";
      this.endOfGame();
      return true;
    } else if (playerValue > dealerValue) {
      this.message = "You win!";
      this.money += this.bet * 2;
      this.endOfGame();
      return true;
    } else if (playerValue === dealerValue && dealerValue > 16) {
      this.message = "It's a DRAW! No Winner!";
      this.money += this.bet;
      this.endOfGame();
      return true;
    }
    return false;
  }

  private checkBlackjack(): boolean {
    const dealerBlackjack = this.calculateHandValue(this.dealerHand) === 21 && this.dealerHand.length === 2;
    const playerBlackjack = this.calculateHandValue(this.playerHand) === 21 && this.playerHand.length === 2;

    if (dealerBlackjack && playerBlackjack) {
      this.message = "Two Blackjacks! It's a DRAW!";
      this.money += this.bet;
      this.endOfGame();
      return true;
    } else if (dealerBlackjack) {
      this.message = "A Blackjack! DEALER wins!";
      this.endOfGame();
      return true;
    } else if (playerBlackjack) {
      this.message = "A Blackjack! YOU win!";
      this.money += this.bet * 1.5;
      this.endOfGame();
      return true;
    }
    return false;
  }

  public onNewGame() {
    this.startOfGame();
  }

  public onHit() {
    if (this.playerHand.length >= 2) {
      this.btnDoubleDisabled = true;
    }
    this.playerHand.push(this.takeCard());
    if (this.calculateHandValue(this.playerHand) > 21) {
      this.checkWinner();
    } else {
      this.updateUI();
    }
  }

  public onDouble() {
    this.btnDoubleDisabled = true;
    this.bet = this.bet * 2;
    this.money = this.money - (this.bet / 2);
    this.onHit();
  }

  public onStand() {
    this.playerHasStood = true;
    while (this.calculateHandValue(this.dealerHand) < 17 ||
           (this.calculateHandValue(this.dealerHand) === 17 && this.dealerHand.includes("A"))) {
      this.dealerHand.push(this.takeCard());
    }
    this.checkWinner();
    this.updateUI();
  }
}
