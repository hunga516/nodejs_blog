import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import methodOverride from 'method-override';

const app = express();
const port = 3000;
const route = import('./routes/index.js');
const db = import('./config/db/index.js');

// Method POST Override
app.use(methodOverride('_method'));

// Middleware để xử lý dữ liệu form
app.use(express.urlencoded({ extended: true }));

// Middleware để xử lý dữ liệu JSON
app.use(express.json());

// Connect to database
db.then(module => module.default.Connect());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'resource', 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'resource', 'views', 'partials'),
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

// Routes init
route.then(module => module.default(app));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get('/test',
    function (req, res, next) {
        if (['vethuong', 'vevip'].includes(req.query.ve)) {
            req.query.add = "added";
            return next();
        }
        return res.status(403).json({
            messages: "failed"
        });
    },
    function (req, res, next) {
        res.json({
            messages: "test",
            add: req.query.add
        });
    }
);
