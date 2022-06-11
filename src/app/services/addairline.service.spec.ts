import { TestBed } from '@angular/core/testing';

import { AddairlineService } from './addairline.service';

describe('AddairlineService', () => {
  let service: AddairlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddairlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
