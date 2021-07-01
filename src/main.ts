import dotenv from 'dotenv';
dotenv.config() // Loading configurations. This should be the first thing
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Module } from '@nestjs/common';
import { join } from 'path';
import './utils/axios'
import engine from './utils/handlebar'
import { HomeController } from './controllers/movie.controller';


@Module({
  imports: [],
  controllers: [HomeController]
})
export class AppModule {}



async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'src/public'));
  app.setBaseViewsDir(join(__dirname, '..', 'src/views'));
  app.setViewEngine('hbs');
  app.engine('hbs', engine);

  await app.listen(3000);
}
bootstrap();
