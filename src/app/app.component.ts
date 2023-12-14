import {ChangeDetectionStrategy, Component, effect, inject, signal, WritableSignal} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatButtonModule} from "@angular/material/button";
import {LanguageService} from "./language.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage, MatButtonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  name = signal('');
  title = signal('');
  intro = signal('');
  experience = signal('');
  diplomas = signal('');
  currentLanguage = inject(LanguageService).currentLanguage;

  constructor() {
    effect(() => {
      this.setLanguage(this.currentLanguage());
    }, { allowSignalWrites: true });
  }

  private setLanguage(current: "french" | "english") {
    if (current === 'french') {
      this.name.set(`Christophe Domergue`);
      this.intro.set(`Développeur d’origine Full-Stack avec une grande appétence pour le développement web, spécialisé en Angular.`);
      this.title.set(`Développeur Front-End`);
      this.experience.set(`Mes expériences`);
      this.diplomas.set(`Mes diplômes et études`);
    }
    else if (current === 'english') {
      this.name.set(`Christophe Domergue`);
      this.intro.set(`Full-Stack developer with a strong interest in web development, specializing in Angular.`);
      this.title.set(`Front-End Developer`);
      this.experience.set(`Work Experiences`);
      this.diplomas.set(`Diplomas & Education`);
    }
  }
}
