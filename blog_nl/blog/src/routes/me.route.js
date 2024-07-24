const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/MeController');

router.get('/courses', meController.meCourses);
router.get('/editCourse/:id', meController.meEditCourse);
router.get('/store', meController.store);



module.exports = router;
