import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '../language.service';
import ExperiencesComponent from './experiences.component';
import { AppTranslationEn, AppTranslationFr } from '../app.data';
import { ExperiencesEn, ExperiencesFr } from './experiences.data';
import { signal } from '@angular/core';
import { MarkdownService, SECURITY_CONTEXT } from 'ngx-markdown';

describe('ExperiencesComponent', () => {
  let component: ExperiencesComponent;
  let fixture: ComponentFixture<ExperiencesComponent>;
  let languageServiceMock: jasmine.SpyObj<LanguageService>;

  beforeEach(async () => {
    languageServiceMock = jasmine.createSpyObj('LanguageService', [], {
      currentLanguage: signal<'english' | 'french'>('english'),
    });

    await TestBed.configureTestingModule({
      imports: [ExperiencesComponent],
      providers: [
        { provide: LanguageService, useValue: languageServiceMock },
        MarkdownService,
        { provide: SECURITY_CONTEXT, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use English education data when language is English', () => {
    expect(component.experiences()).toEqual(ExperiencesEn);
  });

  it('should use French education data when language is French', () => {
    languageServiceMock.currentLanguage.set('french');
    fixture.detectChanges();
    expect(component.experiences()).toEqual(ExperiencesFr);
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
