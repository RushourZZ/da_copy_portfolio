import { Routes } from '@angular/router';
import { HomeSiteComponent } from './sites/home/home';
import { DatenschutzSiteComponent } from './sites/datenschutz/datenschutz';
import { ImpressumSiteComponent } from './sites/impressum/impressum';

export const routes: Routes = [
  { path: '', component: HomeSiteComponent },
  { path: 'datenschutz', component: DatenschutzSiteComponent },
  { path: 'privacy-policy', component: DatenschutzSiteComponent },
  { path: 'impressum', component: ImpressumSiteComponent },
  { path: 'legal-notice', component: ImpressumSiteComponent },
  { path: '**', redirectTo: '' },
];
