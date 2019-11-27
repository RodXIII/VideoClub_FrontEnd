import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCategoriesComponent } from './components/movie-categories/movie-categories.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MoviePopularComponent } from './components/movie-popular/movie-popular.component';


const routes: Routes = [
  {path: "", redirectTo: "movies", pathMatch:"full"},
  {path:"movies", component:MovieListComponent},
  {path:"movies/:category",component:MovieCategoriesComponent},
  {path:"register",component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"movies/:id", component:MovieDetailComponent},
  {path:"movies/popular", component:MoviePopularComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
