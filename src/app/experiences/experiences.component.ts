import { ChangeDetectionStrategy, Component, computed, effect, inject, Signal } from '@angular/core';
import { LanguageService } from '../language.service';
import { NgOptimizedImage } from '@angular/common';
import { MarkdownComponent } from 'ngx-markdown';
import { ExperiencesEn, ExperiencesFr } from './experiences.data';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [NgOptimizedImage, MarkdownComponent],
  templateUrl: './experiences.component.html',
  styleUrls: ['experiences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExperiencesComponent {
  currentLanguage = inject(LanguageService).currentLanguage;
  experiences: Signal<Experience[]>;

  constructor() {
    effect(
      () => {
        this.setLanguage(this.currentLanguage());
      },
      { allowSignalWrites: true },
    );
    this.experiences = computed(() => (this.currentLanguage() === 'french' ? ExperiencesFr : ExperiencesEn));
  }

  private setLanguage(current: 'french' | 'english') {}
}

export type Experience = {
  id: number;
  title: string;
  body: { text: string; title: string }[];
  logoUrl: string;
  duration: string;
  start: string;
  end: string;
  companyName: string;
};
