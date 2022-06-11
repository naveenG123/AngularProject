import { TestBed } from '@angular/core/testing';

import { InventoryservicesService } from './inventoryservices.service';

describe('InventoryservicesService', () => {
  let service: InventoryservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
