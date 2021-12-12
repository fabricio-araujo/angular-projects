import { Routes } from "@angular/router";

import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from "./products/products.component";

export const ShoppingCartRoutes: Routes = [
    {
        path: 'shopping-cart',
        redirectTo: 'products'
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'cart',
        component: CartComponent
    }
];