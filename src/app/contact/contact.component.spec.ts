import { TestBed } from '@angular/core/testing';
import ContactComponent from './contact.component';
import { LanguageService } from '../language.service';
import { ContactEN, ContactFR } from './contact.data';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let languageServiceMock: jasmine.SpyObj<LanguageService>;

  beforeEach(() => {
    languageServiceMock = jasmine.createSpyObj('LanguageService', ['currentLanguage']);
    languageServiceMock.currentLanguage.and.returnValue('english'); // Valeur par défaut

    TestBed.configureTestingModule({
      providers: [{ provide: LanguageService, useValue: languageServiceMock }],
    });

    component = TestBed.createComponent(ContactComponent).componentInstance;
  });

  describe('decryptEmail', () => {
    it('should decrypt the encrypted email correctly', () => {
      const decryptedEmail = component['decryptEmail'](); // Appel de la méthode privée
      expect(decryptedEmail).toContain('domergue');
      expect(decryptedEmail).toContain('christophe');
      expect(decryptedEmail).toContain('@gmail.com');
      expect(decryptedEmail.split('@')[0].split('.').length).toBe(2);
    });
  });

  describe('contact', () => {
    it('should return English contact when current language is English', () => {
      languageServiceMock.currentLanguage.and.returnValue('english');
      expect(component.contact()).toBe(ContactEN);
    });

    it('should return French contact when current language is French', () => {
      languageServiceMock.currentLanguage.and.returnValue('french');
      expect(component.contact()).toBe(ContactFR);
    });
  });

  describe('copyEmailToClipboard', () => {
    let clipboardWriteTextSpy: jasmine.Spy;

    beforeEach(() => {
      clipboardWriteTextSpy = spyOn(navigator.clipboard, 'writeText');
    });

    it('should copy decrypted email to clipboard', async () => {
      clipboardWriteTextSpy.and.resolveTo();
      await component.copyEmailToClipboard();
      const decryptedEmail = component['decryptEmail']();
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(decryptedEmail);
    });

    it('should set showPopup to true after copying', async () => {
      clipboardWriteTextSpy.and.resolveTo();
      jasmine.clock().install();
      await component.copyEmailToClipboard();
      expect(component.showPopup()).toBeTrue();
      jasmine.clock().tick(3001);
      expect(component.showPopup()).toBeFalse();
      jasmine.clock().uninstall();
    });

    it('should log an error if clipboard write fails', async () => {
      const error = new Error('Clipboard write failed');
      clipboardWriteTextSpy.and.rejectWith(error);
      spyOn(console, 'error');
      await component.copyEmailToClipboard();
      expect(console.error).toHaveBeenCalledWith(ContactEN.copyError, error);
    });
  });
});
