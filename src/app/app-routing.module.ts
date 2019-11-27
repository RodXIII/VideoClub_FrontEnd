import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCategoriesComponent } from './components/movie-categories/movie-categories.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MoviePopularComponent } from './components/movie-popular/movie-popular.component';
import { MovieTopRatedComponent } from './components/movie-top-rated/movie-top-rated.component';


const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch:"full"},
  {path:"home", component:MovieListComponent},
  {path:"movies/:category",component:MovieCategoriesComponent},
  {path:"register",component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"movie/:id", component:MovieDetailComponent},
  {path:"top_rated", component:MovieTopRatedComponent},
  {path:"popular",  component:MoviePopularComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
