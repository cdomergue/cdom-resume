import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideMarkdown } from 'ngx-markdown';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './shared/store/product/product.reducers';
import { ProductEffects } from './shared/store/product/product.effects';
import { EffectsModule } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    provideMarkdown(),
    importProvidersFrom([StoreModule.forRoot({ products: productReducer }), EffectsModule.forRoot([ProductEffects])]),
  ],
};
