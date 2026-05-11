import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../language.service';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.html',
  styleUrl: './skill.scss',
})
export class Skill {
  private readonly language = inject(LanguageService);
  protected readonly lang = this.language.lang;
  protected readonly skills = [
    { key: 'html', name: 'HTML', icon: 'assets/icons/html.png' },
    { key: 'css', name: 'CSS', icon: 'assets/icons/css.png' },
    { key: 'js', name: 'JavaScript', icon: 'assets/icons/js.png' },
    { key: 'md', name: 'Material Design', icon: 'assets/icons/md.png' },
    { key: 'ts', name: 'TypeScript', icon: 'assets/icons/ts.png' },
    { key: 'ng', name: 'Angular', icon: 'assets/icons/ng.png' },
    { key: 'sb', name: 'Supabase', icon: 'assets/icons/sb.png' },
    { key: 'git', name: 'Git', icon: 'assets/icons/git.png' },
    { key: 'rest', name: 'REST-API', icon: 'assets/icons/rest-api.png' },
    { key: 'scrum', name: 'Scrum', icon: 'assets/icons/scrum.png' },
    { key: 'gm', name: 'Growth mindset', icon: 'assets/icons/gm.png' },
  ];
}
