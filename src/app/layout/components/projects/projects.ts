import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly projects = [
    { name: 'Join', techs: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'], image: 'assets/img/join.png' },
    { name: 'El Pollo Loco', techs: ['HTML', 'CSS', 'JavaScript'], image: 'assets/img/loco.png' },
    { name: 'DA Bubble', techs: ['Angular', 'Firebase', 'TypeScript'], image: 'assets/img/bubble.png' },
  ];
}
