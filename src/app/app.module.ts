import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieCategoriesComponent } from './components/movie-categories/movie-categories.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatMenuModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MoviePopularComponent } from './components/movie-popular/movie-popular.component';
import { MovieTopRatedComponent } from './components/movie-top-rated/movie-top-rated.component';
import { MovieUpcomingComponent } from './components/movie-upcoming/movie-upcoming.component';
import { MovieResultsComponent } from './components/movie-results/movie-results.component';
import { GenreSearchComponent } from './components/genre-search/genre-search.component';
import { MovieGenreComponent } from './components/movie-genre/movie-genre.component';
@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    HeaderComponent,
    MovieCategoriesComponent,
    RegisterComponent,
    FooterComponent,
    LoginComponent,
    MovieDetailComponent,
    MoviePopularComponent,
    MovieTopRatedComponent,
    MovieUpcomingComponent,
    MovieResultsComponent,
    GenreSearchComponent,
    MovieGenreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
