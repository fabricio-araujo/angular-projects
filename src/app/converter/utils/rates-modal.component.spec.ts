import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateBrPipe } from '../pipes/date-br.pipe';
import { ConverterService } from '../services/converter.service';

import { RatesModalComponent } from './rates-modal.component';

describe('RatesModalComponent', () => {
  let component: RatesModalComponent;
  let fixture: ComponentFixture<RatesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        RatesModalComponent,
        DateBrPipe
      ],
      providers: [
        ConverterService
      ],
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
