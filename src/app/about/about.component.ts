import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguageService } from '../language.service';
import { AboutEn, AboutFr } from './about.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutComponent {
  private readonly currentLanguage = inject(LanguageService).currentLanguage;
  readonly about = computed(() => (this.currentLanguage() === 'french' ? AboutFr : AboutEn));
}
