import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoughtsAndCrossesComponent } from './noughts-and-crosses.component';
import { NoughtsAndCrossesService } from './shared/noughts-and-crosses.service';

describe('NoughtsAndCrossesComponent', () => {
  let component: NoughtsAndCrossesComponent;
  let fixture: ComponentFixture<NoughtsAndCrossesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        NoughtsAndCrossesComponent 
      ],
      providers: [
        NoughtsAndCrossesService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoughtsAndCrossesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
