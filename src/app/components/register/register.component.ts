import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user: User = {
    username: '',
    password: ''
  };
  constructor(
    private userService: UserService,
    private router: Router) { }
  registrar() {
    this.userService.register(this.user)
      .subscribe(res => console.log(res))
    setTimeout(() => {
      this.router.navigate(['/login'])
    }, 1500);
  }
}
