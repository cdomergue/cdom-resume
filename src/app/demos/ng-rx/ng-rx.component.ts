import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { ProductFacade } from '../../shared/store/product/product.facade';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { LanguageService } from '../../language.service';
import { AppTranslationEn, AppTranslationFr } from '../../app.data';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductType } from '../../shared/store/product/models/product-type';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../../shared/store/product/models/product';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-ng-rx',
  standalone: true,
  imports: [
    AsyncPipe,
    CurrencyPipe,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './ng-rx.component.html',
  styleUrl: './ng-rx.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NgRxComponent implements OnInit {
  productFacade = inject(ProductFacade);
  products = toSignal(this.productFacade.products$, { initialValue: [] });
  isLoading = toSignal(this.productFacade.isLoading$);
  appTranslation = computed(() => (this.currentLanguage() === 'french' ? AppTranslationFr : AppTranslationEn));
  form = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    description: new FormControl<string>('', Validators.required),
    type: new FormControl<ProductType>(ProductType.VEHICLE, Validators.required),
    price: new FormControl<number>(0, Validators.required),
  });
  productType = ProductType;

  private currentLanguage = inject(LanguageService).currentLanguage;

  ngOnInit(): void {
    this.productFacade.loadProducts();
  }

  onSubmit() {
    const product: Product = {
      id: Math.random() * 100,
      name: this.form.controls.name.value ?? '',
      description: this.form.controls.description.value ?? '',
      type: this.form.controls.type.value ?? ProductType.VEHICLE,
      price: this.form.controls.price.value ?? 0,
    };

    this.productFacade.addProduct(product);
  }

  deleteProduct(productId: number) {
    this.productFacade.deleteProduct(productId);
  }
}
