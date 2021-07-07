import { Controller, Get, Param, Render } from '@nestjs/common';
import { Movie } from '../models/movie.model';

@Controller()
export class MovieController {

  @Get("/")
  @Render('movie/list')
  async ShowAll() {
    return {
      movies: await Movie.GetAll()
    }
  }

  @Get("/movie/:id")
  @Render('movie/single')
  async ShowOne(@Param("id") id: number) {
    return {
      movie: await Movie.GetById(id)
    }
  }

}
