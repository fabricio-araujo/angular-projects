import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoughtsAndCrossesRoutes } from './noughts-and-crosses/noughts-and-crosses-routing.module'
import { ShoppingCartRoutes } from './shopping-cart/shopping-cart-routing.module'
import { CalculatorRoutes } from './calculator/calculator-routing.module';
import { DashboardRoutes } from './dashboard/dashboard-routing.module';
import { ConverterRoutes } from './converter/converter-routing.module'
import { TaskRoutes } from './task-manager/task-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  ...NoughtsAndCrossesRoutes,
  ...ShoppingCartRoutes,
  ...CalculatorRoutes,
  ...DashboardRoutes,
  ...ConverterRoutes,
  ...TaskRoutes

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
