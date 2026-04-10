import { Component, inject } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-impressum-site',
  imports: [],
  templateUrl: './impressum.html',
  styleUrl: './impressum.scss',
})
export class ImpressumSiteComponent {
  private readonly language = inject(LanguageService);
  protected readonly lang = this.language.lang;
}
