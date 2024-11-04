import { Component } from '@angular/core';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss'
})
export class ToolsComponent {
}
