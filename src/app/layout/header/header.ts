import { Component, inject } from '@angular/core';
import { Lang, LanguageService } from '../../language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly language = inject(LanguageService);
  protected readonly activeLang = this.language.lang;

  protected setLang(lang: Lang): void {
    this.language.setLang(lang);
  }
}
