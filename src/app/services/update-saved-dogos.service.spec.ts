import { TestBed } from '@angular/core/testing';

import { UpdateSavedDogosService } from './update-saved-dogos.service';

describe('UpdateSavedDogosService', () => {
  let service: UpdateSavedDogosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateSavedDogosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
