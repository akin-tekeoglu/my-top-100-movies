import { config } from 'dotenv';
config() // Loading configurations. This should be the first thing
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import './utils/axios'
import engine from './utils/handlebar'
import { MovieController } from './controllers/movie.controller';


(async function () {
  const app = await NestFactory.create<NestExpressApplication>(
    { 
      controllers: [MovieController], 
      // Nest requires a constructable type so I added this as a workaround
      module: function () { } 
    },
  );

  app.useStaticAssets(join(__dirname, '..', 'src/public'));
  app.setBaseViewsDir(join(__dirname, '..', 'src/views'));
  app.setViewEngine('hbs');
  app.engine('hbs', engine);

  await app.listen(3000);
})()
