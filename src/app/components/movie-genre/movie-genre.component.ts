import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-genre',
  templateUrl: './movie-genre.component.html',
  styleUrls: ['./movie-genre.component.scss']
})
export class MovieGenreComponent implements OnInit {
  peliculas: Array<Movie> = [];
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
    ) { console.log('this.peliculas') }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const genre = params.get('genre');
      this.movieService.getMoviesByGenre(genre)
        .subscribe(
          res => this.peliculas = Object.values(res),
          error => console.error(error)
        )
    })
  }
}
