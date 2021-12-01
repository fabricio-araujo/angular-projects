import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CalculatorService } from '../services/calculator.service';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        CalculatorComponent 
      ],
      providers: [
        CalculatorService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should grant that 3 + 2 = 5', () => {
    let btn3 = fixture.debugElement.query(By.css('#btn3'));
    let btnAddition = fixture.debugElement.query(By.css('#btnAddition'));
    let btn2 = fixture.debugElement.query(By.css('#btn2'));
    let btnCalculate = fixture.debugElement.query(By.css('#btnCalculate'));
    let display = fixture.debugElement.query(By.css('#display'));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();
    
    btnAddition.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalculate.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('5');
  });
});
