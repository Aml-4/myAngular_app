import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductItemDetailsComponent } from './product-item-details/product-item-details.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CheckFormComponent } from './check-form/check-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductItemDetailsComponent,
    ConfirmationComponent,
    CartComponent,
    HeaderComponent,
    CartItemComponent,
    CheckFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
