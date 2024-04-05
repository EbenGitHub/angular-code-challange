import { TestBed } from '@angular/core/testing';

import { ActorsService } from './actors.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ActorsService', () => {
  let service: ActorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(ActorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getActors function', () => {
    expect(service.getActors).toBeTruthy();
  });

  it('should have getActor function', () => {
    expect(service.getActorDetail).toBeTruthy();
  });

});
