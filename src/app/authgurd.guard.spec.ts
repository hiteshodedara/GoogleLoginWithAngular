import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authgurdGuard } from './authgurd.guard';

describe('authgurdGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authgurdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
