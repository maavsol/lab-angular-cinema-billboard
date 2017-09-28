import { Component, OnInit } from '@angular/core';
import { MovieInfo } from '../services/movieList.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-my-about',
  templateUrl: './my-about.component.html',
  styleUrls: ['./my-about.component.css'],
  providers: [MovieInfo]
})
export class MyAboutComponent implements OnInit {
  movies: Array<any>=[];
  movieId:number;
  constructor(private theMovieInfo: MovieInfo, private route: ActivatedRoute) { }

  ngOnInit() {
    this.movies = this.theMovieInfo.getMovies()
    this.route.params
    .subscribe((params) => this.movieId = Number(params['id']))  }

}
