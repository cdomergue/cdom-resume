import {ChangeDetectionStrategy, Component, effect, inject} from '@angular/core';
import {LanguageService} from "../language.service";

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencesComponent {
  currentLanguage = inject(LanguageService).currentLanguage;

  constructor() {
    effect(() => {
      this.setLanguage(this.currentLanguage());
    }, { allowSignalWrites: true });
  }

  private setLanguage(current: "french" | "english") {
  }
}
