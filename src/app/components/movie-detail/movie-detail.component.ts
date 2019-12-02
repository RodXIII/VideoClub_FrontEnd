import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie:any;
  constructor(
    private router: Router,
    private movieService : MovieService,
    private route:ActivatedRoute,
    private userService:UserService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      const id=params.get('id');
      this.movieService.getMovieById(id)
      .subscribe(movie=>{
        this.movie=movie;
      })
    })
  }

  rent(){
    console.log(this.movie[0].title);
    
    this.userService.toOrder(this.movie[0].title)
    .subscribe(res=>console.log(res))
    setTimeout(() => {
    this.router.navigate(['/profile'])
  }, 500);

  }
}
