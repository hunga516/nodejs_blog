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

    // [GET] /me/courses/edit/:id
    async meEditCourse(req, res, next) {
        Course.findById({ _id: req.params.id })
            .then(course => {
                res.render(`me/meEditCourse`, {
                    course: singleMongooseToObject(course)
                })
            })
            .catch(next)
    }
    // [PUT] /me/courses/edit/store/:id
    async storeEditCourse(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(course => res.redirect('/me/courses'))
            .catch(next)
    }
    // [DELETE] /me/courses/delete/:id
    async deleteCourse(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(course => res.redirect('/me/courses'))
            .catch(next)
    }
}

module.exports = new MeController();
