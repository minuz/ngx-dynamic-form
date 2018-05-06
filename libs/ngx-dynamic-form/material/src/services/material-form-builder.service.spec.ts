import { TestBed, inject } from '@angular/core/testing';

import { MaterialFormBuilderService } from './material-form-builder.service';

describe('MaterialFormBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaterialFormBuilderService]
    });
  });

  it('should be created', inject([MaterialFormBuilderService], (service: MaterialFormBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
