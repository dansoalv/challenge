/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GbmService } from './gbm.service';

describe('Service: Gbm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GbmService]
    });
  });

  it('should ...', inject([GbmService], (service: GbmService) => {
    expect(service).toBeTruthy();
  }));
});
