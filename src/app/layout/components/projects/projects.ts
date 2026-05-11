import { Component, HostListener, OnDestroy, inject } from '@angular/core';
import { LanguageService } from '../../../language.service';

type TechKey = 'css' | 'html' | 'js' | 'ts' | 'angular' | 'firebase';
type TechItem = { key: TechKey; name: string; icon: string };

type ProjectItem = {
  name: string;
  techLine: string;
  stack: TechItem[];
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
  protected activeTech: number | null = null;

  private readonly TECHS: Record<TechKey, TechItem> = {
    css: { key: 'css', name: 'CSS', icon: 'assets/icons/css.svg' },
    html: { key: 'html', name: 'HTML', icon: 'assets/icons/html.svg' },
    js: { key: 'js', name: 'JavaScript', icon: 'assets/icons/js.svg' },
    ts: { key: 'ts', name: 'TypeScript', icon: 'assets/icons/typescript.svg' },
    angular: { key: 'angular', name: 'Angular', icon: 'assets/icons/angular.svg' },
    firebase: { key: 'firebase', name: 'Firebase', icon: 'assets/icons/firebase.svg' },
  };

  protected readonly projects: ProjectItem[] = [
    {
      name: 'Join',
      techLine: 'CSS | HTML | Firebase | Angular | TypeScript',
      stack: [this.TECHS.css, this.TECHS.html, this.TECHS.firebase, this.TECHS.angular, this.TECHS.ts],
      image: 'assets/img/join.png',
      github: 'https://github.com/',
      live: 'https://example.com',
      aboutDe: 'Task Manager im Kanban-System. Aufgaben erstellen, organisieren und per Drag-and-Drop verschieben.',
      aboutEn: 'Task manager inspired by the Kanban system. Create, organize, and move tasks with drag and drop.',
    },
    {
      name: 'El Pollo Loco',
      techLine: 'JavaScript | HTML | CSS',
      stack: [this.TECHS.js, this.TECHS.html, this.TECHS.css],
      image: 'assets/img/loco.png',
      github: 'https://github.com/RushourZZ/el_pollo_loco',
      live: 'https://maxkipka.developerakademie.net/el_pollo_loco/index.html',
      aboutDe: '2D Jump-and-Run mit eigener Spiel-Logik, Kollisionen, Animationen und Soundsteuerung.',
      aboutEn: '2D jump-and-run game with custom logic, collisions, animations, and audio controls.',
    },
    {
      name: 'DA Bubble',
      techLine: 'Angular | Firebase | TypeScript',
      stack: [this.TECHS.angular, this.TECHS.firebase, this.TECHS.ts],
      image: 'assets/img/bubble.png',
      github: 'https://github.com/',
      live: 'https://example.com',
      aboutDe: 'Chat-Anwendung mit Realtime-Nachrichten, Channels und moderner Angular-Architektur.',
      aboutEn: 'Chat app with real-time messaging, channels, and a modern Angular architecture.',
    },
  ];

  protected openProject(index: number): void {
    this.selectedIndex = index;
    this.activeTech = null;
    this.updateBodyLock();
  }

  protected closeProject(): void {
    this.selectedIndex = null;
    this.activeTech = null;
    this.updateBodyLock();
  }

  protected nextProject(): void {
    if (this.selectedIndex === null) return;
    this.selectedIndex = (this.selectedIndex + 1) % this.projects.length;
    this.activeTech = null;
  }

  protected toggleTech(index: number, event: Event): void {
    event.stopPropagation();
    this.activeTech = this.activeTech === index ? null : index;
  }

  @HostListener('document:click', ['$event'])
  protected onDocClick(event: MouseEvent): void {
    if (this.activeTech === null) return;
    const target = event.target as HTMLElement | null;
    if (!target?.closest('.projects__dialog-tech-item')) this.activeTech = null;
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
