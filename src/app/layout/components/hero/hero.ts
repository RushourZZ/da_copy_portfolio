import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../language.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private readonly language = inject(LanguageService);
  protected readonly lang = this.language.lang;
  private readonly marqueeEn = [
    'Available for remote work',
    'Frontend Developer',
    'Based in Bavaria',
    'Open to opportunities',
  ];

  private readonly marqueeDe = [
    'Verfügbar für Remote-Arbeit',
    'Frontend Entwickler',
    'Standort Bayern',
    'Offen für neue Chancen',
  ];

  protected get marqueeItems(): string[] {
    return this.lang() === 'de' ? this.marqueeDe : this.marqueeEn;
  }
}
