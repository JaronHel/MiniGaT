import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
MatGridListModule
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-tools',
    imports: [
        MatGridListModule,
        RouterOutlet,
        RouterLink
    ],
    templateUrl: './tools.component.html',
    styleUrl: './tools.component.scss'
})
export class ToolsComponent {
}
