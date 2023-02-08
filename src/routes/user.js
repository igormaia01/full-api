import { Router } from 'express';
import UserController from '../controllers/User';

const router = new Router();

router.post('/', UserController.store);

export default router;
