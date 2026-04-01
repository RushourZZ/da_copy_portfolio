import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly marqueeItems = [
    'Available for remote work',
    'Frontend Developer',
    'Based in Munich',
    'Open to opportunities',
  ];
}
