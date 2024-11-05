import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { BlackjackComponent } from './games/blackjack/blackjack.component';
import { ToolsComponent } from './tools/tools.component';
import { PassgenComponent } from './tools/PassGen/passgen/passgen.component';
import { MemoryComponent } from './games/memory/memory.component';
import { HolComponent } from './games/higherorlower/hol.component';
import { SnakeComponent } from './games/snake/snake.component';

export const routes: Routes = [
  {
    path: '', redirectTo: '/home',  pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'games',
    component: GamesComponent,
  },
  {
    path: 'tools',
    component: ToolsComponent,
  },
  {
    path: 'games/blackjack',
    component: BlackjackComponent,
  },
  {
    path: 'games/memory',
    component: MemoryComponent,
  },
  {
    path: 'games/higherorlower',
    component: HolComponent,
  },
  {
    path: 'games/snake',
    component: SnakeComponent,
  },
  {
    path: 'tools/passgen',
    component: PassgenComponent,
  }
];
