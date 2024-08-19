import express from 'express';
import newsController from '../app/controllers/NewsController.js'; // Đổi extension sang .js nếu cần

const router = express.Router();

router.use('/:slug/:id', newsController.show);
router.use('/', newsController.index);

export default router;
