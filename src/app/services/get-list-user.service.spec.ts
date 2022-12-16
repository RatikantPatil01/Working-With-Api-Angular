import { TestBed } from '@angular/core/testing';

import { GETLISTUSERService } from './get-list-user.service';

describe('GETLISTUSERService', () => {
  let service: GETLISTUSERService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GETLISTUSERService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
