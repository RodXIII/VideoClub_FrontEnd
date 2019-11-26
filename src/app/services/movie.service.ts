import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl='https://localhost:3000';
  constructor(private httpClient:HttpClient) { }

  getDiscoverMovies():Observable<object>{
    return this.httpClient.get(this.apiUrl+'/movies/')
  }
  getMoviesByCategory(category:string):Observable<object>{
    return this.httpClient.get(`${this.apiUrl}movie/${category}?api_key=${this.apiKey}&language=es-ES`)
  }
  getMovieById(id:string){
    return this.httpClient.get(`${this.apiUrl}/movie/id/${id}`)
  }
}
