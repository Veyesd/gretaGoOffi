import { TestBed } from '@angular/core/testing';

import { UserHasLiftService } from './user_has_lift.service';

describe('UserHasLiftService', () => {
  let service: UserHasLiftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserHasLiftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
