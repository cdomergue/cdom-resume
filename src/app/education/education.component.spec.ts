import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '../language.service';
import EducationComponent from './education.component';
import { AppTranslationEn, AppTranslationFr } from '../app.data';
import { EducationEn, EducationFr } from './education.data';
import { signal } from '@angular/core';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;
  let languageServiceMock: jasmine.SpyObj<LanguageService>;

  beforeEach(async () => {
    languageServiceMock = jasmine.createSpyObj('LanguageService', [], {
      currentLanguage: signal<'english' | 'french'>('english'),
    });

    await TestBed.configureTestingModule({
      imports: [EducationComponent],
      providers: [{ provide: LanguageService, useValue: languageServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use English education data when language is English', () => {
    expect(component.education()).toEqual(EducationEn);
  });

  it('should use French education data when language is French', () => {
    languageServiceMock.currentLanguage.set('french');
    fixture.detectChanges();
    expect(component.education()).toEqual(EducationFr);
  });

  it('should use English app translation when language is English', () => {
    expect(component.appTranslation()).toEqual(AppTranslationEn);
  });

  it('should use French app translation when language is French', () => {
    languageServiceMock.currentLanguage.set('french');
    fixture.detectChanges();
    expect(component.appTranslation()).toEqual(AppTranslationFr);
  });
});
