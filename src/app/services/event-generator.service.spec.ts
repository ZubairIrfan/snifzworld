/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventGeneratorService } from './event-generator.service';

describe('EventGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventGeneratorService]
    });
  });

  it('should ...', inject([EventGeneratorService], (service: EventGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
