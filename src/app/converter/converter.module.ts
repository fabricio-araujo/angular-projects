import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ConverterComponent } from './components/converter.component';
import { ConverterService } from './services/converter.service';
import { CurrencyService } from './services/currency.service';
import { NumberDirective } from './directives/number.directive';
import { RatesModalComponent } from './utils/rates-modal.component';
import { DateBrPipe } from './pipes/date-br.pipe';


@NgModule({
  declarations: [
    ConverterComponent,
    NumberDirective,
    RatesModalComponent,
    DateBrPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    ConverterComponent
  ],
  providers: [
    ConverterService,
    CurrencyService
  ]
})
export class ConverterModule { }
