import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user:any;
  private username:any;
  constructor(private httpClient:HttpClient) { }

  register(user:User):Observable<object>{
    return this.httpClient.post('http://localhost:3000/user/register',user)
  }
  login(user:User):Observable<object>{
    return this.httpClient.post('http://localhost:3000/user/login',user)
  }

  getProfile():Observable<any>{
    
    return this.httpClient.get(`http://localhost:3000/user/${this.user}`,
    {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    });

  }

  toOrder(movieTitle):Observable<object>{console.log(movieTitle);
  
    return this.httpClient.patch('http://localhost:3000/user/order',{username: this.username, title: movieTitle},
    {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
  }

  getUser():User{
    return this.user;
  }

  setUser(user:any):void{
    this.username=user.username;
    this.user=user._id;
    console.log(user._id + ' es el id');
    
  }

}
