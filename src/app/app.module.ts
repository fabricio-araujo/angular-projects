import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NoughtsAndCrossesModule } from './noughts-and-crosses/noughts-and-crosses.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { CalculatorModule } from './calculator/calculator.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ConverterModule } from './converter/converter.module';
import { TasksModule } from './task-manager/tasks.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NoughtsAndCrossesModule,
    ShoppingCartModule,
    CalculatorModule,
    DashboardModule,
    ConverterModule,
    BrowserModule,
    TasksModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
