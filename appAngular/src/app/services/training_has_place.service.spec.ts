import { TestBed } from '@angular/core/testing';

import { TrainingHasPlaceService } from './training_has_place.service';

describe('TrainingHasPlaceService', () => {
  let service: TrainingHasPlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingHasPlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
