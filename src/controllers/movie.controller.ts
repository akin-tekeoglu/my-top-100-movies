import { Controller, Get, Render } from '@nestjs/common';
import { Movie } from '../models/movie.model';

@Controller()
export class HomeController {

  @Get()
  @Render('index')
  async index() {
    return {
      movies: await Movie.discover()
    }
  }

}
