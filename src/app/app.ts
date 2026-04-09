import { Component } from '@angular/core';
import { Header } from './layout/header/header';
import { Hero } from './layout/components/hero/hero';
import { AboutMe } from './layout/components/about-me/about-me';
import { Skill } from './layout/components/skill/skill';
import { Projects } from './layout/components/projects/projects';
import { ReferencesComponent } from './layout/components/references/references';
import { ContactComponent } from './layout/components/contact/contact';
import { FooterComponent } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, AboutMe, Skill, Projects, ReferencesComponent, ContactComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
