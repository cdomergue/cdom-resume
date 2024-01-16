import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  public currentLanguage: WritableSignal<'french' | 'english'> = signal(this.getBrowserLanguage());

  private getBrowserLanguage() {
    return navigator.language.startsWith('fr') ? 'french' : 'english';
  }
}
