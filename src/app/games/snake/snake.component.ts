import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-snake',
    imports: [CommonModule],
    templateUrl: './snake.component.html',
    styleUrls: ['./snake.component.scss']
})
export class SnakeComponent implements OnInit {
  snakePositionX: number = 0;
  snakePositionY: number = 0;
  stepSize: number = 50;
  direction: string = "";
  rotation: number = 0;
  fieldSize: number = 750;

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    setInterval(() => {
        this.moveSnake();
    }, 150);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
          case 'ArrowRight':
              this.direction = "right";
              this.rotation = 0;
              break;
          case 'ArrowDown':
              this.direction = "down";
              this.rotation = 90;
              break;
          case 'ArrowLeft':
              this.direction = "left";
              this.rotation = 180;
              break;
          case 'ArrowUp':
              this.direction = "up";
              this.rotation = 270;
              break;
      }
  }

  moveSnake() {
      switch (this.direction) {
          case "up":
              this.snakePositionY -= this.stepSize; 
              break;
          case "down":
              this.snakePositionY += this.stepSize; 
              break;
          case "left":
              this.snakePositionX -= this.stepSize; 
              break;
          case "right":
              this.snakePositionX += this.stepSize;
              break;
      }
      if (this.checkCollision()) {
        this.handleCollision();
      }
  }

  checkCollision(): boolean {
    if (
        this.snakePositionX < 0 ||
        this.snakePositionX + 250 > this.fieldSize ||
        this.snakePositionY < 0 ||
        this.snakePositionY + 200 > this.fieldSize
    ) {
        return true;
    }
    return false;
  }

  handleCollision() {
    alert("Game Over!");
    this.snakePositionX = 0;
    this.snakePositionY = 0;
    this.rotation = 0;
    this.direction = "";
  }
}

