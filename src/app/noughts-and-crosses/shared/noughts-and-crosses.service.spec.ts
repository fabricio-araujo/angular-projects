import { TestBed } from '@angular/core/testing';

import { NoughtsAndCrossesService } from './noughts-and-crosses.service';

describe('NoughtsAndCrossesService', () => {
  let service: NoughtsAndCrossesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoughtsAndCrossesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
