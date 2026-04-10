import { Component, inject } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-datenschutz-site',
  imports: [],
  templateUrl: './datenschutz.html',
  styleUrl: './datenschutz.scss',
})
export class DatenschutzSiteComponent {
  private readonly language = inject(LanguageService);
  protected readonly lang = this.language.lang;
}
