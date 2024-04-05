import { TestBed } from '@angular/core/testing';

import { FilmsService } from './films.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('FilmsService', () => {
  let service: FilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(FilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getFilm method', () => {
    expect(service.getFilm).toBeDefined();
  });
});
