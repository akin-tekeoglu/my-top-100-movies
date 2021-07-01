import * as exphbs from 'express-handlebars';

const engine = exphbs({
    extname: '.hbs', 
    helpers: {
        // A helper function allow us to inject css and js files to correct place
        // See views/layouts/main.hbs for details
        // More info https://stackoverflow.com/questions/25300017/how-to-ensure-the-javascript-is-at-the-bottom-of-the-code-in-express-handlebars
        section: function (name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        },
        dateTimeFormat: context => context && context.toLocaleDateString()
    }
})
export default engine;