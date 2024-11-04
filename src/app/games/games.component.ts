import { Component } from '@angular/core';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {

}
