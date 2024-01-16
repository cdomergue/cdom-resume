import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AppTranslationEn, AppTranslationFr } from '../app.data';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-demos',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, RouterLinkActive, RouterLink],
  templateUrl: './demos.component.html',
  styleUrl: './demos.component.scss',
})
export default class DemosComponent {
  currentLanguage = inject(LanguageService).currentLanguage;
  appTranslation = computed(() => (this.currentLanguage() === 'french' ? AppTranslationFr : AppTranslationEn));
}

