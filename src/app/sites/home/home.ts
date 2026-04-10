import { Component } from '@angular/core';
import { Hero } from '../../layout/components/hero/hero';
import { AboutMe } from '../../layout/components/about-me/about-me';
import { Skill } from '../../layout/components/skill/skill';
import { Projects } from '../../layout/components/projects/projects';
import { ReferencesComponent } from '../../layout/components/references/references';
import { ContactComponent } from '../../layout/components/contact/contact';

@Component({
  selector: 'app-home-site',
  imports: [Hero, AboutMe, Skill, Projects, ReferencesComponent, ContactComponent],
  templateUrl: './home.html',
})
export class HomeSiteComponent {}
