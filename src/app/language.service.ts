import { Injectable, signal } from '@angular/core';

export type Lang = 'en' | 'de';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private static readonly STORAGE_KEY = 'portfolio-lang';
  private readonly current = signal<Lang>(this.restore());
  protected readonly exposed = this.current.asReadonly();

  get lang() {
    return this.exposed;
  }

  setLang(lang: Lang): void {
    this.current.set(lang);
    localStorage.setItem(LanguageService.STORAGE_KEY, lang);
  }

  private restore(): Lang {
    const stored = localStorage.getItem(LanguageService.STORAGE_KEY);
    return stored === 'de' || stored === 'en' ? stored : 'en';
  }
}
