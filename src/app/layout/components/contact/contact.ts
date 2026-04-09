import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LanguageService } from '../../../language.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly language = inject(LanguageService);
  protected readonly lang = this.language.lang;
  protected submitted = false;

  protected readonly form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    consent: [false, Validators.requiredTrue],
  });

  protected submit(): void {
    this.submitted = true;
    if (this.form.invalid) return;
    this.form.reset({ name: '', email: '', message: '', consent: false });
    this.submitted = false;
  }

  protected error(field: 'name' | 'email' | 'message'): string {
    const control = this.form.controls[field];
    if (!this.submitted || !control.invalid) return '';
    if (field === 'name') return this.lang() === 'de' ? 'Ups! dein Name fehlt' : 'Oops! it seems your name is missing';
    if (field === 'message') return this.lang() === 'de' ? 'Was moechtest du entwickeln?' : 'What do you need to develop?';
    if (control.hasError('email')) return this.lang() === 'de' ? 'Bitte gib eine gueltige E-Mail ein' : 'Please enter a valid email';
    return this.lang() === 'de' ? 'Hoppla! deine E-Mail fehlt' : 'Hoppla! your email is required';
  }

  protected consentError(): string {
    const invalid = this.form.controls.consent.invalid;
    if (!this.submitted || !invalid) return '';
    return this.lang() === 'de' ? 'Bitte akzeptiere die Datenschutzerklärung.' : 'Please accept the privacy policy.';
  }
}
