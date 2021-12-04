import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NumberDirective } from '../directives/number.directive';
import { DateBrPipe } from '../pipes/date-br.pipe';
import { ConverterService } from '../services/converter.service';
import { CurrencyService } from '../services/currency.service';
import { RatesModalComponent } from '../utils/rates-modal.component';

import { ConverterComponent } from './converter.component';

describe('ConverterComponent', () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ConverterComponent,
        NumberDirective,
        DateBrPipe,
        RatesModalComponent 
      ],
      providers: [
        ConverterService,
        CurrencyService
      ],
      imports: [
        FormsModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
