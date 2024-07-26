const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override')
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');

//Method POST Override
app.use(methodOverride('_method'))

// Middleware để xử lý dữ liệu form
app.use(express.urlencoded({ extended: true }));

// Middleware để xử lý dữ liệu JSON
app.use(express.json());

// Connect to database
db.Connect();

app.use(express.static(path.join(__dirname, 'public'))); // dirname là Home -> src

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main', // Nếu bạn có layout chính
    layoutsDir: path.join(__dirname, 'resource', 'views', 'layouts'), // Đường dẫn đến layout
    partialsDir: path.join(__dirname, 'resource', 'views', 'partials'), // Đường dẫn đến partials
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
