import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LanguageService } from './language.service';
import { AppTranslationEn, AppTranslationFr } from './app.data';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'app-root',
    imports: [
    RouterOutlet,
    NgOptimizedImage,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatListModule
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  opened = false;
  currentLanguage = inject(LanguageService).currentLanguage;
  appTranslation = computed(() => (this.currentLanguage() === 'french' ? AppTranslationFr : AppTranslationEn));
}
