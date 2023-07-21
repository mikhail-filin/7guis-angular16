import { TestBed } from '@angular/core/testing';

import { CellsStoreService } from './cells-store.service';

describe('CellsStoreService', () => {
  let service: CellsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CellsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
