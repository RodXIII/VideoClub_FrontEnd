import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-popular',
  templateUrl: './movie-popular.component.html',
  styleUrls: ['./movie-popular.component.scss']
})
export class MoviePopularComponent implements OnInit {
  peliculas:Array<Movie>=[];
  constructor(private movieService:MovieService) { }
  
  ngOnInit() {
    this.movieService.getPopularMovies()
    .subscribe(
      res=>this.peliculas=Object.values(res),
      error=>console.error(error)
    )
  }

}
