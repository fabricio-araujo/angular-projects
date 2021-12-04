import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Currency } from '../models/currency.model';
import { Conversion } from '../models/conversion.model';
import { ConversionResponse } from '../models/conversion-response.model';
import { CurrencyService } from '../services/currency.service';
import { ConverterService } from '../services/converter.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  currencies: Currency[];
  conversion: Conversion;
  hasError: boolean;
  conversionResponse: ConversionResponse;

  @ViewChild("conversionForm", { static: true }) conversionForm: NgForm;

  constructor(
    private currencyService: CurrencyService,
    private converterService: ConverterService
  ) { }

  ngOnInit(): void {
    this.currencies = this.currencyService.listAll();
    this.init();
  }

  init(): void {
    this.conversion = new Conversion('USD', 'BRL', null);
    this.hasError = false;
  }

  convert(): void {
    if(this.conversionForm.form.valid) {
      this.converterService
      .convert(this.conversion)
      .subscribe(
        response => this.conversionResponse = response,
        error => this.hasError = true
      );
    }
  }

}
