import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguageService } from '../language.service';
import { NgOptimizedImage } from '@angular/common';
import { MarkdownComponent } from 'ngx-markdown';
import { ExperiencesEn, ExperiencesFr } from './experiences.data';
import { AppTranslationEn, AppTranslationFr } from '../app.data';

@Component({
    selector: 'app-experiences',
    imports: [NgOptimizedImage, MarkdownComponent],
    templateUrl: './experiences.component.html',
    styleUrls: ['experiences.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ExperiencesComponent {
  currentLanguage = inject(LanguageService).currentLanguage;
  experiences = computed(() => (this.currentLanguage() === 'french' ? ExperiencesFr : ExperiencesEn));
  appTranslation = computed(() => (this.currentLanguage() === 'french' ? AppTranslationFr : AppTranslationEn));
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
