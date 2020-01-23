import { TestBed } from '@angular/core/testing';

import { CoreLibraryService } from './core-library.service';

describe('CoreLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoreLibraryService = TestBed.get(CoreLibraryService);
    expect(service).toBeTruthy();
  });
});
