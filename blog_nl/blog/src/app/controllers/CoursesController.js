const toObject = require("../../utils/mongoose");
const Course = require('../models/Course')
const { mutipleMongooseToObject, singleMongooseToObject } = require('../../utils/mongoose')

class CoursesController {
    // [GET] /courses
    async index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render("courses/courses", { courses: mutipleMongooseToObject(courses) })
            })
            .catch(next)
    }
    // [GET] /courses/:slug
    async detail(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/detailCourse', { course: singleMongooseToObject(course) })
                console.log(course);
            })
            .catch(next)
    }
    // [GET] /courses/create
    create(req, res) {
        res.render("courses/createCourse")
    }
    // [POST] /courses/store
    async store(req, res, next) {
        const course = req.body
        if (course.images === '') {
            course.images = undefined
        }

        Course.create(course)
            .then(course => res.redirect('/me/courses'))
    }
}

module.exports = new CoursesController();
