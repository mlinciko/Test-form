import { TestBed } from '@angular/core/testing';

import { InitialFormService } from './initial-form.service';

describe('InitialFormService', () => {
  let service: InitialFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitialFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
