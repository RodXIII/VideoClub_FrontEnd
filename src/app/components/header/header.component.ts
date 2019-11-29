import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string
  link: string
  constructor(private userService: UserService, private router: Router) { }
  ngOnInit() {
    this.title = '';
    this.link = ''
  }

  setRoute():void{
    this.link="/results/"+this.title;
    console.log(this.link);
    this.router.navigateByUrl(this.link);
  }

}
