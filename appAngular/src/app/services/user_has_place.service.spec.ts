import { TestBed } from '@angular/core/testing';

import { UserHasPlaceService } from './user_has_place.service';

describe('UserHasPlaceService', () => {
  let service: UserHasPlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserHasPlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
