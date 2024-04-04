import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { ActorDetailsResponse, ActorsResponse, PaginationParams } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(
    private apiService: ApiService
  ) { }

  getActors = (url: string, params: PaginationParams): Observable<ActorsResponse> => {
    return this.apiService.get(url, { params, responseType: 'json' });
  }

  getActorDetail = (url: string, actorId: number): Observable<ActorDetailsResponse> => {
    return this.apiService.get(url + `/${actorId}`, { responseType: 'json' });
  }
}
