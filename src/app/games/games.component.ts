import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-games',
    imports: [
        MatGridListModule,
        RouterOutlet,
        RouterLink
    ],
    templateUrl: './games.component.html',
    styleUrl: './games.component.scss'
})
export class GamesComponent {

}
