import { Injectable, signal } from '@angular/core';

export type Lang = 'en' | 'de';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly current = signal<Lang>('en');
  protected readonly exposed = this.current.asReadonly();

  get lang() {
    return this.exposed;
  }

  setLang(lang: Lang): void {
    this.current.set(lang);
  }
}
