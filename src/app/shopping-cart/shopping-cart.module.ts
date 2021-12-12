import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { FilterPipe } from './filter.pipe';
import { ApiService } from './services/api.service';
import { CartService } from './services/cart.service';


@NgModule({
  declarations: [
    CartComponent,
    HeaderComponent,
    ProductsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ApiService,
    CartService
  ]
})
export class ShoppingCartModule { }
