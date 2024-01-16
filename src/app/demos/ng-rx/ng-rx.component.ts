import { Component, computed, inject, OnInit } from '@angular/core';
import { ProductFacade } from '../../shared/store/product/product.facade';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { LanguageService } from '../../language.service';
import { AppTranslationEn, AppTranslationFr } from '../../app.data';

@Component({
  selector: 'app-ng-rx',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe],
  templateUrl: './ng-rx.component.html',
  styleUrl: './ng-rx.component.scss',
})
export default class NgRxComponent implements OnInit {
  productFacade = inject(ProductFacade);
  products = toSignal(this.productFacade.products$, { initialValue: [] });
  appTranslation = computed(() => (this.currentLanguage() === 'french' ? AppTranslationFr : AppTranslationEn));

  private currentLanguage = inject(LanguageService).currentLanguage;

  ngOnInit(): void {
    this.productFacade.loadProducts();
  }
}
