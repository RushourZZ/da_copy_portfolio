import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.html',
  styleUrl: './skill.scss',
})
export class Skill {
  protected readonly skills = [
    { name: 'HTML', icon: 'assets/icons/html.png' },
    { name: 'CSS', icon: 'assets/icons/css.png' },
    { name: 'JavaScript', icon: 'assets/icons/js.png' },
    { name: 'Material Design', icon: 'assets/icons/md.png' },
    { name: 'TypeScript', icon: 'assets/icons/ts.png' },
    { name: 'Angular', icon: 'assets/icons/ng.png' },
    { name: 'Supabase', icon: 'assets/icons/sb.png' },
    { name: 'Git', icon: 'assets/icons/git.png' },
    { name: 'REST-API', icon: 'assets/icons/rest-api.png' },
    { name: 'Scrum', icon: 'assets/icons/scrum.png' },
    { name: 'Growth mindset', icon: 'assets/icons/gm.png' },
  ];
}
