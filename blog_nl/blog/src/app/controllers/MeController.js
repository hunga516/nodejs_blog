const toObject = require("../../utils/mongoose");
const Course = require('../models/Course')
const { mutipleMongooseToObject, singleMongooseToObject } = require('../../utils/mongoose')

class MeController {
    // [GET] /me/courses
    async meCourses(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render(`me/meCourses`, {
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next)
    }

    // [GET] /me/editCourse/:slug
    async meEditCourse(req, res, next) {
        Course.findById({ _id: req.params.id })
            .then(course => {
                res.render(`me/meEditCourse`, {
                    course: singleMongooseToObject(course)
                })
            })
            .catch(next)
    }

    async store(req, res, next) {
        Course.findById({ _id: req.params.id })
            .then(course => {
                res.render(`me/meEditCourse`, {
                    course: singleMongooseToObject(course)
                })
            })
            .catch(next)
    }
}

module.exports = new MeController();
