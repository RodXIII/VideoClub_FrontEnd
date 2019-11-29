import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-upcoming',
  templateUrl: './movie-upcoming.component.html',
  styleUrls: ['./movie-upcoming.component.scss']
})
export class MovieUpcomingComponent implements OnInit {

  peliculas:Array<Movie>=[];
  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.movieService.getUpcoming()
    .subscribe(
      res=>this.peliculas=Object.values(res),
      error=>console.error(error)
    )
  }

}
