import { Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../language.service';
import { ContactEN, ContactFR } from './contact.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
})
export default class ContactComponent {
  currentLanguage = inject(LanguageService).currentLanguage;
  contact = computed(() => (this.currentLanguage() === 'french' ? ContactFR : ContactEN));
  showPopup = signal(false);

  private readonly encryptedEmail: string = 'grphujxhafkulvwrskhbjpdloafrp';

  private decryptEmail(): string {
    return this.encryptedEmail
      .split('')
      .map((char) => {
        if (char === 'b') return '@';
        if (char === 'a') return '.';
        return String.fromCharCode(char.charCodeAt(0) - 3);
      })
      .join('');
  }

  copyEmailToClipboard() {
    const decryptedEmail = this.decryptEmail();
    navigator.clipboard.writeText(decryptedEmail).then(
      () => {
        this.showPopup.set(true);
        setTimeout(() => this.showPopup.set(false), 3000); // Hide popup after 3 seconds
      },
      (err) => {
        console.error(this.contact().copyError, err);
      },
    );
  }
}
