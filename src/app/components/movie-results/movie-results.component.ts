import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';


@Component({
  selector: 'app-movie-results',
  templateUrl: './movie-results.component.html',
  styleUrls: ['./movie-results.component.scss']
})
export class MovieResultsComponent implements OnInit {
  
  peliculas: Array<Movie> = [];
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const title = params.get('title');
      this.movieService.getMoviesByTitle(title)
        .subscribe(
          res => this.peliculas = Object.values(res),
          error => console.error(error)
        )
    })
  }

}
