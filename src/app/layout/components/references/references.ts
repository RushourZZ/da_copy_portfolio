import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  imports: [],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class ReferencesComponent {
  protected activeIndex = 1;

  protected readonly references = [
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
