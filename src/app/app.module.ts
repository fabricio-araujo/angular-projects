import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TasksModule } from './task-manager/tasks.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CalculatorModule } from './calculator/calculator.module';
import { NoughtsAndCrossesModule } from './noughts-and-crosses/noughts-and-crosses.module';
import { ConverterModule } from './converter/converter.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CalculatorModule,
    TasksModule,
    NoughtsAndCrossesModule,
    ConverterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
