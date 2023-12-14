import {ChangeDetectionStrategy, Component, effect, signal, WritableSignal} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage, MatButtonModule],
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
  current: WritableSignal<'french' | 'english'> = signal('french');

  constructor() {
    effect(() => {
      this.setLanguage(this.current());
    }, { allowSignalWrites: true });
  }

  private setLanguage(current: "french" | "english") {
    if (current === 'french') {
      this.name.set($localize`Christophe Domergue`);
      this.intro.set($localize`Développeur d’origine Full-Stack avec une grande appétence pour le développement web, spécialisé en Angular.`);
      this.title.set($localize`Développeur Front-End`);
      this.experience.set($localize`Mes expériences`);
      this.diplomas.set($localize`Mes diplômes et études`);
    }
    else if (current === 'english') {
      this.name.set($localize`Christophe Domergue`);
      this.intro.set($localize`Full-Stack developer with a strong interest in web development, specializing in Angular.`);
      this.title.set($localize`Front-End Developer`);
      this.experience.set($localize`Work Experiences`);
      this.diplomas.set($localize`Diplomas & Education`);
    }
  }
}
