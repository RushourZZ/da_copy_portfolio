import { Component } from '@angular/core';
import { Header } from './layout/header/header';
import { Hero } from './layout/components/hero/hero';
import { AboutMe } from './layout/components/about-me/about-me';
import { Skill } from './layout/components/skill/skill';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, AboutMe, Skill],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
