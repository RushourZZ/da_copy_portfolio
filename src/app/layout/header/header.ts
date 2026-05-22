import { Component, OnDestroy, inject } from '@angular/core';
import { Lang, LanguageService } from '../../language.service';
import { ScrollLockService } from '../../scroll-lock.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnDestroy {
  private readonly language = inject(LanguageService);
  private readonly scrollLock = inject(ScrollLockService);
  protected readonly activeLang = this.language.lang;
  protected isMobileMenuOpen = false;
  private isLocked = false;

  protected setLang(lang: Lang): void {
    this.language.setLang(lang);
  }

  protected setLangAndClose(lang: Lang): void {
    this.setLang(lang);
    this.closeMobileMenu();
  }

  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.syncLock();
  }

  protected closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.syncLock();
  }

  ngOnDestroy(): void {
    if (this.isLocked) {
      this.scrollLock.unlock();
      this.isLocked = false;
    }
  }

  private syncLock(): void {
    if (this.isMobileMenuOpen && !this.isLocked) {
      this.scrollLock.lock();
      this.isLocked = true;
    } else if (!this.isMobileMenuOpen && this.isLocked) {
      this.scrollLock.unlock();
      this.isLocked = false;
    }
  }
}
