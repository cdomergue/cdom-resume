import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../language.service';
import { AppTranslationEn, AppTranslationFr } from '../app.data';
import { EducationEn, EducationFr } from './education.data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export default class EducationComponent {
  currentLanguage = inject(LanguageService).currentLanguage;
  education = computed(() => (this.currentLanguage() === 'french' ? EducationFr : EducationEn));
  appTranslation = computed(() => (this.currentLanguage() === 'french' ? AppTranslationFr : AppTranslationEn));

  downloadFile(filename: string): void {
    const link = document.createElement('a');
    link.href = `assets/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
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
