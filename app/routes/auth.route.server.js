import { Router } from 'express';
import { DisplayLoginPage, DisplayRegisterPage } from '../controllers/auth.controller.server.js';

const router = Router();

// display login page
router.get('/login', DisplayLoginPage);

// display register page
router.get('/register', DisplayRegisterPage);

export default router;