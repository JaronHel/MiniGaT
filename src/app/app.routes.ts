import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { BlackjackComponent } from './games/blackjack/blackjack.component';
import { MemoryComponent } from './games/memory/memory.component';
import { HolComponent } from './games/higherorlower/hol.component';
import { SlotsComponent } from './games/slots/slots.component';
import { ToolsComponent } from './tools/tools.component';
import { PassgenComponent } from './tools/passgen/passgen.component';
import { ColorConverterComponent } from './tools/color-converter/color-converter.component';
import { QRGenComponent } from './tools/qrgen/qrgen.component';
import { CalculatorComponent } from './tools/calculator/calculator.component';

export const routes: Routes = [
  // -------------------------------------- Default
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },

  // -------------------------------------- Home
  {
    path: 'home',
    component: HomeComponent
  },

  // -------------------------------------- Games
  {
    path: 'games',
    component: GamesComponent
  },

  // Blackjack
  {
    path: 'games/blackjack',
    component: BlackjackComponent
  },

  // Memory
  {
    path: 'games/memory',
    component: MemoryComponent
  },

  // Higher or Lower
  {
    path: 'games/higherorlower',
    component: HolComponent
  },

  // Slots
  {
    path: 'games/slots',
    component: SlotsComponent
  },

  // -------------------------------------- Tools
  {
    path: 'tools',
    component: ToolsComponent
  },

  // PassGen
  {
    path: 'tools/passgen',
    component: PassgenComponent
  },

  // Color Converter
  {
    path: 'tools/colorconverter',
    component: ColorConverterComponent
  },

  // QRGen
  {
    path: 'tools/qrgen',
    component: QRGenComponent
  },

  // Calculator
  {
    path: 'tools/calculator',
    component: CalculatorComponent
  }
];
