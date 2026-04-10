import { Component, OnDestroy, inject } from '@angular/core';
import { Lang, LanguageService } from '../../language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnDestroy {
  private static readonly BODY_MENU_LOCK = 'body--menu-open';
  private readonly language = inject(LanguageService);
  protected readonly activeLang = this.language.lang;
  protected isMobileMenuOpen = false;

  protected setLang(lang: Lang): void {
    this.language.setLang(lang);
  }

  protected setLangAndClose(lang: Lang): void {
    this.setLang(lang);
    this.closeMobileMenu();
  }

  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.updateBodyLock();
  }

  protected closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.updateBodyLock();
  }

  ngOnDestroy(): void {
    document.body.classList.remove(Header.BODY_MENU_LOCK);
  }

  private updateBodyLock(): void {
    document.body.classList.toggle(Header.BODY_MENU_LOCK, this.isMobileMenuOpen);
  }
}
