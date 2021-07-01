import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as exphbs from 'express-handlebars';
import { join } from 'path';
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.engine('hbs', exphbs({
    extname: '.hbs', helpers: {
      // A helper function allow us to inject css and js files to correct place
      // See views/layouts/main.hbs for details
      // More info https://stackoverflow.com/questions/25300017/how-to-ensure-the-javascript-is-at-the-bottom-of-the-code-in-express-handlebars
      section: function (name, options) {
        if (!this._sections) this._sections = {};
        this._sections[name] = options.fn(this);
        return null;
      }
    }
  }));

  await app.listen(3000);
}
bootstrap();
