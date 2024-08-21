import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import methodOverride from 'method-override';

const port = 3000;
import route from './routes/index.js'
import Connect from './config/db/index.js';
import SortMiddleware from './app/middlewares/SortMiddleware.js';
const app = express();

// Method POST Override
app.use(methodOverride('_method'));

// Middleware để xử lý dữ liệu form
app.use(express.urlencoded({ extended: true }));

// Middleware để xử lý dữ liệu JSON
app.use(express.json());

// Connect to database
Connect();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

//Custom middleware
app.use(SortMiddleware)

// Template engine
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'resource', 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'resource', 'views', 'partials'),
    helpers: {
        sortable: function (field, value) {
            return `
                <a href="?_sort&column=name&type=desc">
            <svg width="14px" height="14px" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8L32 224c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
            </svg>
          </a>
            `
        }
    }
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

// Routes init
route(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

