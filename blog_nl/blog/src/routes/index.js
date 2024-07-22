const newRoute = require('./news.route');
const siteRoute = require('./site.route');
const coursesRoute = require('./courses.route')

function route(app) {
    app.use('/news', newRoute);
    app.use('/courses', coursesRoute)

    app.use('/', siteRoute);
}

module.exports = route
