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
    'Based in Bayern',
    'Open to opportunities',
  ];
  private readonly marqueeDe = [
    'Verfuegbar fuer Remote-Arbeit',
    'Frontend Entwickler',
    'Standort Bayern',
    'Offen fuer neue Chancen',
  ];

  protected get marqueeItems(): string[] {
    return this.lang() === 'de' ? this.marqueeDe : this.marqueeEn;
  }
}
