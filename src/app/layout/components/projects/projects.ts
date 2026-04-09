import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../language.service';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private readonly language = inject(LanguageService);
  protected readonly lang = this.language.lang;
  protected readonly projects = [
    { name: 'Join', techs: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'], image: 'assets/img/join.png' },
    { name: 'El Pollo Loco', techs: ['HTML', 'CSS', 'JavaScript'], image: 'assets/img/loco.png' },
    { name: 'DA Bubble', techs: ['Angular', 'Firebase', 'TypeScript'], image: 'assets/img/bubble.png' },
  ];
}
