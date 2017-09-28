import { Component, OnInit } from '@angular/core';
import { MovieInfo } from '../services/movieList.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
  providers: [MovieInfo]
})
export class MyHomeComponent implements OnInit {
  movies: Array<any>=[];
  constructor(private theMovieInfo: MovieInfo) { }

  ngOnInit() {
    this.movies = this.theMovieInfo.getMovies()
  }

}
