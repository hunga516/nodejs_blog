const newRoute = require('./news.route');
const siteRoute = require('./site.route');

function route(app) {
    app.use('/news', newRoute);

    app.use('/', siteRoute);
}

module.exports = route;
