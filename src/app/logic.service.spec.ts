import { TestBed } from '@angular/core/testing';

import { logicService } from './logic.service';

describe('HeroService', () => {
  let service: logicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(logicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
