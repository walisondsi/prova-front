import { TestBed, inject } from '@angular/core/testing';

import { ResultadoService } from './resultado.service';

describe('ResultadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultadoService]
    });
  });

  it('should be created', inject([ResultadoService], (service: ResultadoService) => {
    expect(service).toBeTruthy();
  }));
});
