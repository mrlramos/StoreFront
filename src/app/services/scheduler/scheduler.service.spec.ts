import { TestBed } from '@angular/core/testing';

import { SchedulerService } from './scheduler.service';

describe('SchudulerService', () => {
  let service: SchedulerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchedulerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
