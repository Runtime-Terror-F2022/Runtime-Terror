import { Router } from "express";
import {
    displayHomePage, 
    } from "../controllers/index.controller.server.js";

const router = Router();

router.get('/', displayHomePage);
router.get('/home', displayHomePage);

export default router;
