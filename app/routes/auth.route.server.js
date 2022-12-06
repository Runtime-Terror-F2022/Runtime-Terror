import { Router } from 'express';
import { DisplayLoginPage, DisplayProfileEditPage, DisplayRegisterPage, ProcessLoginPage, ProcessLogoutPage, ProcessProfileEditPage, ProcessRegisterPage } from '../controllers/auth.controller.server.js';
import { AuthGuard } from "../utils/index.js";
const router = Router();

// display login page
router.get('/login', DisplayLoginPage);
// Process Login Page
router.post('/login', ProcessLoginPage);

// display register page
router.get('/register', DisplayRegisterPage);
// Process Registration page
router.post('/register', ProcessRegisterPage);

// Process Logout Page
router.get('/logout', ProcessLogoutPage);

router.get('/profile-edit/:id', AuthGuard, DisplayProfileEditPage);
router.post('/profile-edit/:id', AuthGuard, ProcessProfileEditPage);

export default router;