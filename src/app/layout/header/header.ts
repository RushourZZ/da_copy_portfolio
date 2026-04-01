import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly activeLang = signal<'en' | 'de'>('en');

  protected setLang(lang: 'en' | 'de') {
    this.activeLang.set(lang);
  }
}
