import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../language.service';

@Component({
  selector: 'app-references',
  imports: [],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class ReferencesComponent {
  private readonly language = inject(LanguageService);
  protected readonly lang = this.language.lang;
  protected activeIndex = 1;

  private readonly referencesEn = [
    {
      text: 'Max, your reliability and proactive mindset made a real difference for our team. Your technical skills helped us deliver our project with confidence.',
      author: 'H. Janisch',
      role: 'Team Partner',
    },
    {
      text: 'Max, it was a pleasure working with you on a demanding frontend effort. You stayed calm, kept everyone aligned, and consistently delivered clean solutions.',
      author: 'A. Becker',
      role: 'Project Lead',
    },
    {
      text: 'Max, collaborating with you is efficient and enjoyable. You communicate clearly, share knowledge generously, and support the team whenever challenges appear.',
      author: 'T. Schulz',
      role: 'Frontend Developer',
    },
  ];
  private readonly referencesDe = [
    {
      text: 'Max, deine Zuverlässigkeit und dein proaktives Denken haben unser Team spürbar vorangebracht. Deine technischen Fähigkeiten haben den Projekterfolg mitgetragen.',
      author: 'H. Janisch',
      role: 'Teamkollege',
    },
    {
      text: 'Max, die Zusammenarbeit mit dir in einem anspruchsvollen Frontend Projekt war großartig. Du bliebst ruhig, hast das Team ausgerichtet und konstant saubere Lösungen geliefert.',
      author: 'A. Becker',
      role: 'Projektleitung',
    },
    {
      text: 'Max, die Zusammenarbeit mit dir ist effizient und angenehm. Du kommunizierst klar, teilst Wissen offen und unterstützt das Team bei jeder Herausforderung.',
      author: 'T. Schulz',
      role: 'Frontend Entwickler',
    },
  ];

  protected get references() {
    return this.lang() === 'de' ? this.referencesDe : this.referencesEn;
  }

  protected previous(): void {
    const last = this.references.length - 1;
    this.activeIndex = this.activeIndex === 0 ? last : this.activeIndex - 1;
  }

  protected next(): void {
    const last = this.references.length - 1;
    this.activeIndex = this.activeIndex === last ? 0 : this.activeIndex + 1;
  }

  protected select(index: number): void {
    this.activeIndex = index;
  }
}
