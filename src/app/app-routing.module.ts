import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskRoutes } from './task-manager/task-routing.module';
import { DashboardRoutes } from './dashboard/dashboard-routing.module';
import { CalculatorRoutes } from './calculator/calculator-routing.module';
import { NoughtsAndCrossesRoutes } from './noughts-and-crosses/noughts-and-crosses-routing.module'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  ...DashboardRoutes,
  ...CalculatorRoutes,
  ...TaskRoutes,
  ...NoughtsAndCrossesRoutes

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
