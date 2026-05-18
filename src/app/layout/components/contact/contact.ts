import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { LanguageService } from '../../../language.service';

type FieldKey = 'name' | 'email' | 'message';
type Locale = { de: string; en: string };
type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  private static readonly ENDPOINT = 'send_mail.php';
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  private readonly language = inject(LanguageService);
  protected readonly lang = this.language.lang;
  protected submitted = false;
  protected status: SubmitStatus = 'idle';

  protected readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
    email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX), Validators.maxLength(120)]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
    consent: [false, Validators.requiredTrue],
  });

  private readonly MSG: {
    required: Record<FieldKey, Locale>;
    minLength: Record<FieldKey, Locale>;
    maxLength: Locale;
    email: Locale;
    consent: Locale;
    success: Locale;
    errorSend: Locale;
  } = {
    required: {
      name: { de: 'Ups! dein Name fehlt', en: 'Oops! it seems your name is missing' },
      email: { de: 'Hoppla! deine E-Mail fehlt', en: 'Hoppla! your email is required' },
      message: { de: 'Was moechtest du entwickeln?', en: 'What do you need to develop?' },
    },
    minLength: {
      name: { de: 'Mindestens 2 Zeichen', en: 'At least 2 characters' },
      email: { de: 'E-Mail ist zu kurz', en: 'Email is too short' },
      message: { de: 'Mindestens 10 Zeichen, damit ich dir helfen kann', en: 'At least 10 characters so I can help you' },
    },
    maxLength: { de: 'Maximale Laenge ueberschritten', en: 'Maximum length exceeded' },
    email: { de: 'Bitte gib eine gueltige E-Mail ein', en: 'Please enter a valid email' },
    consent: { de: 'Bitte akzeptiere die Datenschutzerklärung.', en: 'Please accept the privacy policy.' },
    success: {
      de: 'Danke! Deine Nachricht wurde gesendet.',
      en: 'Thank you! Your message has been sent.',
    },
    errorSend: {
      de: 'Senden fehlgeschlagen. Bitte versuche es später erneut.',
      en: 'Sending failed. Please try again later.',
    },
  };

  protected showError(field: FieldKey): boolean {
    const c = this.form.controls[field];
    return c.invalid && (c.touched || this.submitted);
  }

  protected showValid(field: FieldKey): boolean {
    const c = this.form.controls[field];
    return c.valid && c.touched;
  }

  protected error(field: FieldKey): string {
    if (!this.showError(field)) return '';
    const c = this.form.controls[field];
    return this.firstMessage(field, c.errors, this.lang() === 'de');
  }

  private firstMessage(field: FieldKey, errs: ValidationErrors | null, de: boolean): string {
    if (errs?.['required']) return this.pick(this.MSG.required[field], de);
    if (errs?.['minlength']) return this.pick(this.MSG.minLength[field], de);
    if (errs?.['maxlength']) return this.pick(this.MSG.maxLength, de);
    if (errs?.['pattern']) return this.pick(this.MSG.email, de);
    return '';
  }

  private pick(msg: Locale, de: boolean): string {
    return de ? msg.de : msg.en;
  }

  protected consentInvalid(): boolean {
    const c = this.form.controls.consent;
    return c.invalid && (c.touched || this.submitted);
  }

  protected consentError(): string {
    if (!this.consentInvalid()) return '';
    return this.pick(this.MSG.consent, this.lang() === 'de');
  }

  protected statusMessage(): string {
    const de = this.lang() === 'de';
    if (this.status === 'success') return this.pick(this.MSG.success, de);
    if (this.status === 'error') return this.pick(this.MSG.errorSend, de);
    return '';
  }

  protected submit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sendForm();
  }

  private sendForm(): void {
    this.status = 'sending';
    const payload = this.form.getRawValue();
    this.http.post<{ success: boolean }>(ContactComponent.ENDPOINT, payload).subscribe({
      next: (res) => (res?.success ? this.onSuccess() : this.onError()),
      error: () => this.onError(),
    });
  }

  private onSuccess(): void {
    this.status = 'success';
    this.form.reset({ name: '', email: '', message: '', consent: false });
    this.submitted = false;
  }

  private onError(): void {
    this.status = 'error';
  }
}
