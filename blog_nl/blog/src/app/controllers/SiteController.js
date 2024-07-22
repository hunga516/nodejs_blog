const toObject = require("../../utils/mongoose");
const course = require("../models/Course");
const Course = require("../models/Course");


class SiteController {
    async index(req, res, next) {
        Course.find({})
            .then(courses => {
                courses = toObject(courses)
                res.render("home", { courses })
            })
            .catch(next)
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
