import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
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
    if (field === 'name') return 'Oops! it seems your name is missing';
    if (field === 'message') return 'What do you need to develop?';
    return control.hasError('email') ? 'Please enter a valid email' : 'Hoppla! your email is required';
  }

  protected consentError(): string {
    const invalid = this.form.controls.consent.invalid;
    return this.submitted && invalid ? 'Please accept the privacy policy.' : '';
  }
}
