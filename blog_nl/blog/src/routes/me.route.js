const express = require('express');
const router = express.Router();
const meCoursesController = require('../app/controllers/MeCoursesController');

router.get('/courses', meCoursesController.meCourses);
router.get('/courses/edit/:id', meCoursesController.meEditCourse);
router.put('/courses/edit/store/:id', meCoursesController.storeEditCourse);
router.delete('/courses/delete/:id', meCoursesController.deleteCourse);
router.get('/courses/trash', meCoursesController.trash);
router.delete('/courses/forceDelete/:id', meCoursesController.forceDeleteCourse);
router.patch('/courses/restore/:id', meCoursesController.restore);





module.exports = router;
