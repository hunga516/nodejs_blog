const toObject = require("../../utils/mongoose");
const Course = require('../models/Course')
const { mutipleMongooseToObject, singleMongooseToObject } = require('../../utils/mongoose')

class CoursesController {
    async index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render("courses", { courses: mutipleMongooseToObject(courses) })
            })
            .catch(next)
    }

    async detail(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('detailCourse', { course: singleMongooseToObject(course) })
                console.log(course);
            })
            .catch(next)
    }
}

module.exports = new CoursesController();
