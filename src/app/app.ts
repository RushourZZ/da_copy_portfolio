import { Component } from '@angular/core';
import { Header } from './layout/header/header';
import { Hero } from './layout/components/hero/hero';

@Component({
  selector: 'app-root',
  imports: [Header, Hero],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
