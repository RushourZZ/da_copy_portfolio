import { Component, OnDestroy, inject } from '@angular/core';
import { LanguageService } from '../../../language.service';

type ProjectItem = {
  name: string;
  techLine: string;
  stack: string[];
  image: string;
  github: string;
  live: string;
  aboutDe: string;
  aboutEn: string;
};

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnDestroy {
  private static readonly BODY_DIALOG_LOCK = 'body--dialog-open';
  private readonly language = inject(LanguageService);
  protected readonly lang = this.language.lang;
  protected selectedIndex: number | null = null;
  protected readonly projects: ProjectItem[] = [
    {
      name: 'Join',
      techLine: 'CSS | HTML | Firebase | Angular | TypeScript',
      stack: [
        'assets/icons/css.skill.png',
        'assets/icons/html.skill.png',
        'assets/icons/firebase.skill.png',
        'assets/icons/angular.skill.png',
        'assets/icons/ts.skill.png',
      ],
      image: 'assets/img/join.png',
      github: 'https://github.com/',
      live: 'https://example.com',
      aboutDe: 'Task Manager im Kanban-System. Aufgaben erstellen, organisieren und per Drag-and-Drop verschieben.',
      aboutEn: 'Task manager inspired by the Kanban system. Create, organize, and move tasks with drag and drop.',
    },
    {
      name: 'El Pollo Loco',
      techLine: 'JavaScript | HTML | CSS',
      stack: [
        'assets/icons/js.skill.png',
        'assets/icons/html.skill.png',
        'assets/icons/css.skill.png',
      ],
      image: 'assets/img/loco.png',
      github: 'https://github.com/RushourZZ/el_pollo_loco',
      live: 'https://maxkipka.developerakademie.net/el_pollo_loco/index.html',
      aboutDe: '2D Jump-and-Run mit eigener Spiel-Logik, Kollisionen, Animationen und Soundsteuerung.',
      aboutEn: '2D jump-and-run game with custom logic, collisions, animations, and audio controls.',
    },
    {
      name: 'DA Bubble',
      techLine: 'Angular | Firebase | TypeScript',
      stack: [
        'assets/icons/angular.skill.png',
        'assets/icons/firebase.skill.png',
        'assets/icons/ts.skill.png',
      ],
      image: 'assets/img/bubble.png',
      github: 'https://github.com/',
      live: 'https://example.com',
      aboutDe: 'Chat-Anwendung mit Realtime-Nachrichten, Channels und moderner Angular-Architektur.',
      aboutEn: 'Chat app with real-time messaging, channels, and a modern Angular architecture.',
    },
  ];

  protected openProject(index: number): void {
    this.selectedIndex = index;
    this.updateBodyLock();
  }

  protected closeProject(): void {
    this.selectedIndex = null;
    this.updateBodyLock();
  }

  protected nextProject(): void {
    if (this.selectedIndex === null) return;
    this.selectedIndex = (this.selectedIndex + 1) % this.projects.length;
  }

  protected get currentProject(): ProjectItem | null {
    if (this.selectedIndex === null) return null;
    return this.projects[this.selectedIndex];
  }

  protected get nextProjectName(): string {
    if (this.selectedIndex === null) return '';
    const next = (this.selectedIndex + 1) % this.projects.length;
    return this.projects[next].name;
  }

  private updateBodyLock(): void {
    const isOpen = this.selectedIndex !== null;
    document.body.classList.toggle(Projects.BODY_DIALOG_LOCK, isOpen);
  }

  ngOnDestroy(): void {
    document.body.classList.remove(Projects.BODY_DIALOG_LOCK);
  }
}
