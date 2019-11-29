import { Component, OnInit, Output } from '@angular/core';
import { Genre, GENRES } from '../../models/genre.model';
import {MatMenu} from '@angular/material/menu';


@Component({
  selector: 'app-genre-search',
  templateUrl: './genre-search.component.html',
  styleUrls: ['./genre-search.component.scss'],
  exportAs: 'genreSearcher'
})
export class GenreSearchComponent implements OnInit {
  @Output() genres: Array<any> = GENRES;

  constructor() {
    
   }

  ngOnInit() {
  }

}
