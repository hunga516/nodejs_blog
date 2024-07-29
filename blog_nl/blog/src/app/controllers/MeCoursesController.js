const toObject = require("../../utils/mongoose");
const Course = require('../models/Course')
const { mutipleMongooseToObject, singleMongooseToObject } = require('../../utils/mongoose')

class MeController {
    // [GET] /me/courses
    async meCourses(req, res, next) {

        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => res.render('me/meCourses', {
                deletedCount,
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next)
    }

    // [GET] /me/courses/edit/:id
    async meEditCourse(req, res, next) {
        Course.findById({ _id: req.params.id })  //original method
            .then(course => {
                res.render(`me/meEditCourse`, {
                    course: singleMongooseToObject(course)
                })
            })
            .catch(next)
    }
    // [PUT] /me/courses/edit/store/:id
    async storeEditCourse(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)  //original method
            .then(course => res.redirect('/me/courses'))
            .catch(next)
    }
    // [DELETE] /me/courses/delete/:id
    async deleteCourse(req, res, next) {
        Course.delete({ _id: req.params.id })    //plugin mongoose-soft-delete method
            .then(course => res.redirect('back'))
            .catch(next)
    }

    async trash(req, res, next) {
        Course.findWithDeleted({ deleted: true }) //all course can use
            .then(courses => res.render('me/trashCourses', {
                courses: mutipleMongooseToObject(courses)
            }))
    }

    async forceDeleteCourse(req, res, next) {
        Course.deleteOne({ _id: req.params.id }) //original method
            .then(course => res.redirect('back'))
    }

    async restore(req, res, next) {
        Course.restore({ _id: req.params.id }) //plugin mongoose-soft-delete method
            .then(course => res.redirect('back'))
            .catch(next)
    }

}

module.exports = new MeController();
