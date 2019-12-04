import { TestBed } from '@angular/core/testing';

import { HttpModService } from './http-mod.service';

describe('HttpModService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpModService = TestBed.get(HttpModService);
    expect(service).toBeTruthy();
  });
});
