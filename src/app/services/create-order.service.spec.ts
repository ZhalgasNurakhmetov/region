import { TestBed } from '@angular/core/testing';

import { CreateOrderService } from './create-order.service';

describe('CreateOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateOrderService = TestBed.get(CreateOrderService);
    expect(service).toBeTruthy();
  });
});
