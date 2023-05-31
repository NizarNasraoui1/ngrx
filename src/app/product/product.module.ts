import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { productReducer } from './ngrx/product.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule, Actions } from "@ngrx/effects";
import { ProductEffect } from './ngrx/product.effect';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature("products", productReducer),
    EffectsModule.forFeature([ProductEffect])
  ],
  exports : [ProductListComponent]
})
export class ProductModule { }
