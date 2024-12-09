import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { BlackjackComponent } from './games/blackjack/blackjack.component';
import { ToolsComponent } from './tools/tools.component';
import { PassgenComponent } from './tools/PassGen/passgen.component';
import { MemoryComponent } from './games/memory/memory.component';
import { HolComponent } from './games/higherorlower/hol.component';
import { ColorConverterComponent } from './tools/color-converter/color-converter.component';
import { QRGenComponent } from './tools/QRGen/qrgen.component';

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
    path: 'tools/passgen',
    component: PassgenComponent,
  },
  {
    path: 'tools/colorconverter',
    component: ColorConverterComponent,
  },
  {
    path: 'tools/qrgen',
    component: QRGenComponent,
  }
];
