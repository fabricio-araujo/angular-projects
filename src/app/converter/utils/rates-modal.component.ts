import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ConversionResponse } from '../models/conversion-response.model';
import { Conversion } from '../models/conversion.model';
import { ConverterService } from '../services/converter.service';

@Component({
  selector: 'rates-modal',
  templateUrl: './rates-modal.component.html',
  styleUrls: ['./rates-modal.component.css']
})
export class RatesModalComponent implements OnInit {

  @Input() id: string;
  @Input() conversionResponse: ConversionResponse;
  @Input() conversion: Conversion = new Conversion();
  @Output() onNewSearch: EventEmitter<any> = new EventEmitter<any>();

  constructor(private converterService: ConverterService) { }

  ngOnInit(): void {
  }

  newSearch() {
    this.onNewSearch.emit();
  }

  get convertedValue(): string {
    if(this.conversionResponse === undefined) {
      return '0';
    }

    return (this.conversion.amount * 
      this.conversionResponse.rates[this.conversion.currencyTo])
      .toFixed(2);
  }

  get priceTo(): number {
    return this.converterService.priceTo(
      this.conversionResponse, this.conversion
    );
  }

  get priceFrom(): string {
    return this.converterService.priceFrom(
      this.conversionResponse, this.conversion
    );
  }

  get priceDate(): string {
    return this.converterService.priceDate(
      this.conversionResponse
    );
  }

}
