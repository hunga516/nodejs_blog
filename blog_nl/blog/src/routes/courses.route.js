const express = require('express');
const router = express.Router();
const coursesController = require('../app/controllers/CoursesController');

router.get('/create', coursesController.create)
router.post('/handle-form-action', coursesController.handleFormAction)
router.post('/create/store', coursesController.store)
router.get('/detail/:slug', coursesController.detail);
router.get('/', coursesController.index);

module.exports = router;
