const newRoute = require('./news.route');
const meRoute = require('./me.route');
const siteRoute = require('./site.route');
const coursesRoute = require('./courses.route')

function route(app) {
    app.use('/news', newRoute);
    app.use('/courses', coursesRoute)
    app.use('/me', meRoute)
    app.use('/', siteRoute);
}

module.exports = route
