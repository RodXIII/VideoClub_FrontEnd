import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  getDiscoverMovies(): Observable<object> {
    return this.httpClient.get(this.apiUrl + '/movies')
  }
  getPopularMovies(): Observable<object> {
    return this.httpClient.get(this.apiUrl + '/movies/popular')
  }
  getRatedMovies(): Observable<object> {
    return this.httpClient.get(this.apiUrl + '/movies/top-rated')
  }
  getMovieById(id: string) {
    return this.httpClient.get(`${this.apiUrl}/movies/id/${id}`)
  }
  getMoviesByCategory(category: string): Observable<object> {
    return this.httpClient.get(`${this.apiUrl}/movies/${category}`)
  }
}
