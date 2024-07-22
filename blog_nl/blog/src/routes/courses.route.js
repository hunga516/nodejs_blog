const express = require('express');
const router = express.Router();
const coursesController = require('../app/controllers/CoursesController');

router.use('/:slug', coursesController.detail);
router.use('/', coursesController.index);

module.exports = router;
