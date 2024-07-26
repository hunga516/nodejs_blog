const express = require('express');
const router = express.Router();
const meCoursesController = require('../app/controllers/MeCoursesController');

router.get('/courses', meCoursesController.meCourses);
router.get('/courses/edit/:id', meCoursesController.meEditCourse);
router.put('/courses/edit/store/:id', meCoursesController.storeEditCourse);
router.delete('/courses/delete/:id', meCoursesController.deleteCourse);




module.exports = router;
