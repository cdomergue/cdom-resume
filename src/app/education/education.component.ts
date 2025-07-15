import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../language.service';
import { AppTranslationEn, AppTranslationFr } from '../app.data';
import { EducationEn, EducationFr } from './education.data';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrl: './education.component.scss'
})
export default class EducationComponent {
  currentLanguage = inject(LanguageService).currentLanguage;
  education = computed(() => (this.currentLanguage() === 'french' ? EducationFr : EducationEn));
  appTranslation = computed(() => (this.currentLanguage() === 'french' ? AppTranslationFr : AppTranslationEn));
}

export type Education = {
  id: string;
  title: string;
  body: { text: string; url?: string }[];
  logoUrl: string;
  duration: string;
  start: string;
  end: string;
  schoolName: string;
};
