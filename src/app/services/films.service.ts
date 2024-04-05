import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmResponse } from '../../types';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(
    private apiService: ApiService
  ) { }

  getFilm = (url: string): Observable<FilmResponse> => {
    return this.apiService.get(url, { responseType: 'json' });
  }
}
