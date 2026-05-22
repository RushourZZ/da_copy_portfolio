import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScrollLockService {
  private static readonly BODY_LOCK_CLASS = 'body--scroll-locked';
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private lockCount = 0;
  private savedScrollY = 0;
  private previousScrollBehavior: string | null = null;

  lock(): void {
    if (!this.isBrowser) return;
    this.lockCount += 1;
    if (this.lockCount > 1) return;

    this.savedScrollY = window.scrollY;
    const body = document.body;
    body.style.top = `-${this.savedScrollY}px`;
    body.classList.add(ScrollLockService.BODY_LOCK_CLASS);
  }

  unlock(): void {
    if (!this.isBrowser) return;
    if (this.lockCount === 0) return;
    this.lockCount -= 1;
    if (this.lockCount > 0) return;

    const body = document.body;
    body.classList.remove(ScrollLockService.BODY_LOCK_CLASS);
    body.style.top = '';

    const html = document.documentElement;
    this.previousScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    window.scrollTo(0, this.savedScrollY);
    html.style.scrollBehavior = this.previousScrollBehavior ?? '';
  }
}
