import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-top-rated',
  templateUrl: './movie-top-rated.component.html',
  styleUrls: ['./movie-top-rated.component.scss']
})
export class MovieTopRatedComponent implements OnInit {

  peliculas:Array<Movie>=[];
  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.movieService.getRatedMovies()
    .subscribe(
      res=>this.peliculas=Object.values(res),
      error=>console.error(error)
    )
  }

}
