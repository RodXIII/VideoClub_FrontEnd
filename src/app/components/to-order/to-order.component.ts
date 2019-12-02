import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-to-order',
  templateUrl: './to-order.component.html',
  styleUrls: ['./to-order.component.scss']
})
export class ToOrderComponent {


  constructor(private userService:UserService) { }
  rent(){
    this.userService.toOrder(this.user)
    .subscribe(res=>console.log(res))
  }
}
